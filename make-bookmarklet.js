//
// make-bookmarklet.js — rebuild BOOKMARKLET.md from the current app.html
// so the bookmarklet produces a REAL, editable patch (a full app document
// with the page title + url embedded as content).
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

// The bookmarklet body (uses ONLY single quotes so it embeds in href="...").
// Content = "<title>\n<url>"; no decoy/ipsum prefix.
const code =
  `(async()=>{const c=document.title+'\\n'+location.href;` +
  `const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');` +
  `const tpl=new TextDecoder().decode(Uint8Array.from(atob('${b64Template}'),q=>q.charCodeAt(0)));` +
  `const doc=tpl.replace('@@C@@',esc);` +
  `const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();` +
  `const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}` +
  `const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});` +
  `let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));` +
  `const u=btoa(b).replace(/\\+/g,'-').replace(/\\//g,'_').replace(/=+$/,'');` +
  `location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()`;

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

1. builds a patch whose content is \`title\\nurl\`,
2. packs it exactly like the app does — the whole app document (with a live
   edit button, URL highlighting, and title-slug) wrapped in a \`p1:\` payload,
3. and opens the patch at \`https://nelforzo.github.io/patch/booter.html#p1:...\`.

So the resulting patch is fully editable: it shows the captured title and url,
highlights the url as a clickable link, and has the usual \`edit\` / \`save\`
controls.

## Rebuilding this file

\`node make-bookmarklet.js\` regenerates this doc from the current app.html,
so the bookmarklet always packs the same (up-to-date) app.
`;

fs.writeFileSync(path.join(__dirname, 'BOOKMARKLET.md'), md, 'utf8');
console.log('wrote BOOKMARKLET.md  bookmarklet length:', href.length);