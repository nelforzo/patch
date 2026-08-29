# patch — bookmarklet

Capture the **current website** into a new patch with one click.

## Install

Drag this link to your bookmarks bar:

<p><a href="javascript:(()=&gt;{const D=['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Sed ut perspiciatis unde omnis iste natus error sit voluptatem.','Praesent commodo cursus magna, vel scelerisque nisl consectetur.','Etiam porta sem malesuada magna mollis euismod.','Nulla vitae elit libero, a pharetra augue.'];(async()=&gt;{const t=D[Math.floor(Math.random()*D.length)]+'\n\n'+document.title+'\n'+location.href;const c=new CompressionStream('deflate-raw');const g=c.writable.getWriter();g.write(new TextEncoder().encode(t));g.close();const r=c.readable.getReader();let ch=[],n=0;for(;;){const x=await r.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=&gt;{o.set(q,p);p+=q.length});let b='';for(let i=0;i&lt;o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()})()">patch this page</a></p>

(Or copy the <code>javascript:</code> value below into a bookmark's URL field.)

## What it does

From any page, it:

1. picks a random decoy sentence (a lorem-ipsum-ish line),
2. builds a patch whose content is `decoy-sentence\n\n<title>\n<url>`,
3. compresses it (native deflate-raw) + base64url-encodes it into a `p1:` payload,
4. and opens a new patch at `https://nelforzo.github.io/patch/booter.html#p1:...`.

## Why the decoy sentence

A bookmark of a patch is named `patch - <first 28 chars of content>`.
Prepending a decoy sentence means the saved bookmark reads e.g.
`patch - Etiam porta sem malesuada ma...` — which says nothing about what
you actually captured. The real page title and URL sit further down in the
content, visible only when the patch is opened.

## The bookmarklet (minified, `javascript:` URL)

```
javascript:(()=>{const D=['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Sed ut perspiciatis unde omnis iste natus error sit voluptatem.','Praesent commodo cursus magna, vel scelerisque nisl consectetur.','Etiam porta sem malesuada magna mollis euismod.','Nulla vitae elit libero, a pharetra augue.'];(async()=>{const t=D[Math.floor(Math.random()*D.length)]+'\n\n'+document.title+'\n'+location.href;const c=new CompressionStream('deflate-raw');const g=c.writable.getWriter();g.write(new TextEncoder().encode(t));g.close();const r=c.readable.getReader();let ch=[],n=0;for(;;){const x=await r.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()})()
```
