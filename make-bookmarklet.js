//
// make-bookmarklet.js — rebuild BOOKMARKLET.md from the current app.html
// so the bookmarklet always produces a REAL, editable patch (a full app
// document with the page title + url embedded), not bare text.
//
// Usage:  node make-bookmarklet.js
//
'use strict';
const fs = require('fs');
const path = require('path');

const app = fs.readFileSync(path.join(__dirname, 'app.html'), 'utf8');
if (!/id="?patch"?>/.test(app)) { console.error('app.html missing #patch'); process.exit(1); }

// Replace the default content inside #patch with a sentinel the running
// bookmarklet swaps for the real content.
const template = app.replace(/id="?patch"?>[\s\S]*?<\/div>/, 'id="patch">@@C@@</div>');
if (!template.includes('@@C@@')) { console.error('could not place content sentinel'); process.exit(1); }

// base64 of the whole template (JS-safe to embed in the bookmarklet)
const b64Template = Buffer.from(template, 'utf8').toString('base64');

// DECOYS
const decoys = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  'Etiam porta sem malesuada magna mollis euismod.',
  'Nulla vitae elit libero, a pharetra augue.'
].join('|');

// The bookmarklet body (uses ONLY single quotes so it embeds in href="...").
const code =
  `(()=>{const D='${decoys}'.split('|');(async()=>{` +
  `const decoy=D[Math.floor(Math.random()*D.length)];` +
  `const c=decoy+'\\n\\n'+document.title+'\\n'+location.href;` +
  `const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');` +
  `const tpl=new TextDecoder().decode(Uint8Array.from(atob('${b64Template}'),q=>q.charCodeAt(0)));` +
  `const doc=tpl.replace('@@C@@',esc);` +
  `const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();` +
  `const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}` +
  `const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});` +
  `let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));` +
  `const u=btoa(b).replace(/\\+/g,'-').replace(/\\//g,'_').replace(/=+$/,'');` +
  `location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()})()`;

const href = 'javascript:' + code;

const md =
`# patch — bookmarklet

Capture the **current website** into a real, editable patch with one click.

## Install

Safari (and iOS Safari) no longer have a bookmarks bar to drag into, so add
this as a normal bookmark and paste the URL value into its address field:

1. Create a new bookmark (e.g. bookmark any page first).
2. Edit the bookmark and replace its URL with the value below.
3. (Name it something like "patch this page".)

**The URL to copy:**

\`\`\`
${href}
\`\`\`

## What it does

From any page, it:

1. picks a random decoy sentence (a lorem-ipsum-ish line),
2. builds a patch whose content is \`decoy\\n\\ntitle\\nurl\`,
3. packs it exactly like the app does — the whole app document (with a live
   edit button, URL highlighting, and title-slug) wrapped in a \`p1:\` payload,
4. and opens the patch at \`https://nelforzo.github.io/patch/booter.html#p1:...\`.

So the resulting patch is fully editable: it shows the captured title and url,
highlights the url as a clickable link, and has the usual \`edit\` / \`save\`
controls.

## Why the decoy sentence

A bookmark of a patch is named \`patch - <first 28 chars of content>\`.
Prepending a decoy sentence means the saved bookmark reads e.g.
\`patch - Etiam porta sem malesuada ma...\` — which says nothing about what
you actually captured. The real page title and URL sit further down, visible
only when the patch is opened.

## Rebuilding this file

\`node make-bookmarklet.js\` regenerates this doc from the current app.html,
so the bookmarklet always packs the same (up-to-date) app.
`;

fs.writeFileSync(path.join(__dirname, 'BOOKMARKLET.md'), md, 'utf8');
console.log('wrote BOOKMARKLET.md  bookmarklet length:', href.length);