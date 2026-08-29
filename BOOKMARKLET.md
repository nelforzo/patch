# patch — bookmarklet

Capture the **current website** into a real, editable patch with one click.

## Install

Safari (and iOS Safari) no longer have a bookmarks bar to drag into, so add
this as a normal bookmark and paste the URL value into its address field:

1. Create a new bookmark (e.g. bookmark any page first).
2. Edit the bookmark and replace its URL with the value below.
3. (Name it something like "patch this page".)

**The URL to copy:**

```
javascript:(()=>{const D='Lorem ipsum dolor sit amet, consectetur adipiscing elit.|Sed ut perspiciatis unde omnis iste natus error sit voluptatem.|Praesent commodo cursus magna, vel scelerisque nisl consectetur.|Etiam porta sem malesuada magna mollis euismod.|Nulla vitae elit libero, a pharetra augue.'.split('|');(async()=>{const decoy=D[Math.floor(Math.random()*D.length)];const c=decoy+'\n\n'+document.title+'\n'+location.href;const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const tpl=atob('PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPnBhdGNoPC90aXRsZT4KPHN0eWxlPgojY29udGVudHt3aGl0ZS1zcGFjZTpwcmUtd3JhcH0KdGV4dGFyZWF7d2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udDppbmhlcml0fQppbnB1dFt0eXBlPWJ1dHRvbl17Zm9udDppbmhlcml0O3BhZGRpbmc6MTBweCAxNnB4fQpAbWVkaWEobWF4LXdpZHRoOjYyMHB4KXtib2R5e21hcmdpbjowO3BhZGRpbmc6MTBweCAxMnB4fWJ1dHRvbixpbnB1dFt0eXBlPWJ1dHRvbl17bWluLWhlaWdodDo0NHB4fX0KPC9zdHlsZT48L2hlYWQ+Cjxib2R5IHRleHQ9IiMxYTE4MTQiIGxpbms9IiMxYTBkYWIiIHZsaW5rPSIjNmIyZDVjIiBhbGluaz0iI2Q0MGUxZSIgbWFyZ2luaGVpZ2h0PSIxOCIgbWFyZ2lud2lkdGg9IjEwIj48YmFzZWZvbnQgZmFjZT0ibW9ub3NwYWNlIj4KPHA+PGZvbnQgc2l6ZT0iNCIgY29sb3I9IiM5YTlhYTIiPnBhdGNoPC9mb250PjwvcD4KPHAgaWQ9InZpZXciPjxmb250IHNpemU9IjMiPjxzcGFuIGlkPSJjb250ZW50Ij5sb2FkaW5n4oCmPC9zcGFuPjwvZm9udD48L3A+Cjx0ZXh0YXJlYSBpZD0iZWRpdG9yIiByb3dzPSI3IiBjb2xzPSI0NCIgaGlkZGVuPjwvdGV4dGFyZWE+PGJyPgo8aW5wdXQgdHlwZT0iYnV0dG9uIiBpZD0iYnRuIiB2YWx1ZT0iZWRpdCIgb25jbGljaz0iZWRpdCgpIj4KPGRpdiBoaWRkZW4gaWQ9InBhdGNoIj5AQENAQDwvZGl2Pgo8c2NyaXB0PgooZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7CmZ1bmN0aW9uICQoaSl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO30KdmFyIFA9InAxOiIsY29udGVudD0kKCJwYXRjaCIpLnRleHRDb250ZW50OwpmdW5jdGlvbiBiYXNlKCl7dHJ5e3JldHVybiBwYXJlbnQubG9jYXRpb24uaHJlZi5zcGxpdCgiIyIpWzBdLnNwbGl0KCI/IilbMF07fWNhdGNoKGUpe3JldHVybiBsb2NhdGlvbi5ocmVmLnNwbGl0KCIjIilbMF0uc3BsaXQoIj8iKVswXTt9fQpmdW5jdGlvbiBiNjQodSl7dmFyIGI9IiIsQ0g9MHg4MDAwO2Zvcih2YXIgaT0wO2k8dS5sZW5ndGg7aSs9Q0gpYis9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHUuc3ViYXJyYXkoaSxpK0NIKSk7cmV0dXJuIGJ0b2EoYikucmVwbGFjZSgvXCsvZywiLSIpLnJlcGxhY2UoL1wvL2csIl8iKS5yZXBsYWNlKC89KyQvLCIiKTt9CndpbmRvdy5lZGl0PWZ1bmN0aW9uKCl7dmFyIGU9JCgiZWRpdG9yIik7ZS52YWx1ZT1jb250ZW50O2UuaGlkZGVuPWZhbHNlO3ZhciBiPSQoImJ0biIpO2IudmFsdWU9InNhdmUiO2Iub25jbGljaz1zYXZlOyQoInZpZXciKS5oaWRkZW49dHJ1ZTtlLmZvY3VzKCk7fTsKZnVuY3Rpb24gc2x1Zyh0KXt0PSh0fHwiIikucmVwbGFjZSgvXHMrL2csIiAiKS50cmltKCk7cmV0dXJuIHQubGVuZ3RoPjI4P3Quc2xpY2UoMCwyOCkrIuKApiI6dDt9CmZ1bmN0aW9uIHNldFRpdGxlKCl7dmFyIHQ9KGNvbnRlbnQ/KCJwYXRjaCAtICIrc2x1Zyhjb250ZW50KSk6InBhdGNoIik7ZG9jdW1lbnQudGl0bGU9dDt0cnl7cGFyZW50LmRvY3VtZW50LnRpdGxlPXQ7fWNhdGNoKGUpe319CmZ1bmN0aW9uIHJlbmRlcmMoKXt2YXIgZXNjPWNvbnRlbnQucmVwbGFjZSgvJi9nLCImYW1wOyIpLnJlcGxhY2UoLzwvZywiJmx0OyIpLnJlcGxhY2UoLz4vZywiJmd0OyIpLnJlcGxhY2UoLyIvZywiJnF1b3Q7Iik7JCgiY29udGVudCIpLmlubmVySFRNTD1lc2MucmVwbGFjZSgvKGh0dHBzPzpcL1wvW15cczxdKykvZywnPGEgaHJlZj0iJDEiIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIj4kMTwvYT4nKTt9CndpbmRvdy5zYXZlPWZ1bmN0aW9uKCl7Y29udGVudD0kKCJlZGl0b3IiKS52YWx1ZTskKCJwYXRjaCIpLnRleHRDb250ZW50PWNvbnRlbnQ7cmVuZGVyYygpO3NldFRpdGxlKCk7dmFyIGI9JCgiYnRuIik7Yi52YWx1ZT0iZWRpdCI7Yi5vbmNsaWNrPWVkaXQ7JCgiZWRpdG9yIikuaGlkZGVuPXRydWU7JCgidmlldyIpLmhpZGRlbj1mYWxzZTsoYXN5bmMgZnVuY3Rpb24oKXt2YXIgaHRtbD0iPCFET0NUWVBFIGh0bWw+XG4iK2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsY3M9bmV3IENvbXByZXNzaW9uU3RyZWFtKCJkZWZsYXRlLXJhdyIpLGNoPVtdLHQ9MDt2YXIgdz1jcy53cml0YWJsZS5nZXRXcml0ZXIoKTt3LndyaXRlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShodG1sKSk7dy5jbG9zZSgpO3ZhciByZD1jcy5yZWFkYWJsZS5nZXRSZWFkZXIoKTtmb3IoOzspe3ZhciByPWF3YWl0IHJkLnJlYWQoKTtpZihyLmRvbmUpYnJlYWs7Y2gucHVzaChyLnZhbHVlKTt0Kz1yLnZhbHVlLmxlbmd0aDt9dmFyIHU9bmV3IFVpbnQ4QXJyYXkodCkscD0wO2Zvcih2YXIgaT0wO2k8Y2gubGVuZ3RoO2krKyl7dS5zZXQoY2hbaV0scCk7cCs9Y2hbaV0ubGVuZ3RoO31wYXJlbnQubG9jYXRpb24uaHJlZj1iYXNlKCkrIj92PSIrRGF0ZS5ub3coKSsiIyIrUCtiNjQodSk7fSkoKTt9OwpyZW5kZXJjKCk7c2V0VGl0bGUoKTsKfSkoKTsKPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4=');const doc=tpl.replace('@@C@@',esc);const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()})()
```

## What it does

From any page, it:

1. picks a random decoy sentence (a lorem-ipsum-ish line),
2. builds a patch whose content is `decoy\n\ntitle\nurl`,
3. packs it exactly like the app does — the whole app document (with a live
   edit button, URL highlighting, and title-slug) wrapped in a `p1:` payload,
4. and opens the patch at `https://nelforzo.github.io/patch/booter.html#p1:...`.

So the resulting patch is fully editable: it shows the captured title and url,
highlights the url as a clickable link, and has the usual `edit` / `save`
controls.

## Why the decoy sentence

A bookmark of a patch is named `patch - <first 28 chars of content>`.
Prepending a decoy sentence means the saved bookmark reads e.g.
`patch - Etiam porta sem malesuada ma...` — which says nothing about what
you actually captured. The real page title and URL sit further down, visible
only when the patch is opened.

## Rebuilding this file

`node make-bookmarklet.js` regenerates this doc from the current app.html,
so the bookmarklet always packs the same (up-to-date) app.
