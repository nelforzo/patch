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
javascript:(()=>{const D='Lorem ipsum dolor sit amet, consectetur adipiscing elit.|Sed ut perspiciatis unde omnis iste natus error sit voluptatem.|Praesent commodo cursus magna, vel scelerisque nisl consectetur.|Etiam porta sem malesuada magna mollis euismod.|Nulla vitae elit libero, a pharetra augue.'.split('|');(async()=>{const decoy=D[Math.floor(Math.random()*D.length)];const c=decoy+'\n\n'+document.title+'\n'+location.href;const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const tpl=new TextDecoder().decode(Uint8Array.from(atob('PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9dXRmLTg+PG1ldGEgbmFtZT12aWV3cG9ydCBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+cGF0Y2g8L3RpdGxlPjxzdHlsZT4KI2NvbnRlbnR7d2hpdGUtc3BhY2U6cHJlLXdyYXB9CnRleHRhcmVhLGlucHV0e2ZvbnQ6aW5oZXJpdDt3aWR0aDoxMDAlfQpAbWVkaWEobWF4LXdpZHRoOjYyMHB4KXt0ZXh0YXJlYSxpbnB1dHttaW4taGVpZ2h0OjQ0cHh9fQo8L3N0eWxlPjwvaGVhZD4KPGJvZHk+PGJhc2Vmb250IGZhY2U9Im1vbm9zcGFjZSI+CjxiPnBhdGNoPC9iPgo8cCBpZD12aWV3PjxzcGFuIGlkPWNvbnRlbnQ+PC9zcGFuPjwvcD4KPHRleHRhcmVhIGlkPWVkaXRvciByb3dzPTcgaGlkZGVuPjwvdGV4dGFyZWE+Cjxmb250IGlkPWhpbnQgc2l6ZT0xIGhpZGRlbj48L2ZvbnQ+CjxpbnB1dCB0eXBlPWJ1dHRvbiBpZD1idG4gdmFsdWU9ZWRpdCBvbmNsaWNrPWUoKT4KPGRpdiBoaWRkZW4gaWQ9InBhdGNoIj5AQENAQDwvZGl2Pgo8c2NyaXB0PgooZnVuY3Rpb24oKXsKdmFyIFA9InAxOiIsTT0xNDUwLGM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhdGNoIikudGV4dENvbnRlbnQ7CmZ1bmN0aW9uICRpKHMpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX0KZnVuY3Rpb24gYjY0KHUpe3ZhciBiPSIiLGk7Zm9yKGk9MDtpPHUubGVuZ3RoO2krKyliKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHVbaV0pO3JldHVybiBidG9hKGIpLnJlcGxhY2UoL1wrL2csIi0iKS5yZXBsYWNlKC9cLy9nLCJfIikucmVwbGFjZSgvPSskLywiIil9CmZ1bmN0aW9uIGJhc2UoKXt0cnl7cmV0dXJuIHBhcmVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KCIjIilbMF0uc3BsaXQoIj8iKVswXX1jYXRjaChlKXtyZXR1cm4gbG9jYXRpb24uaHJlZi5zcGxpdCgiIyIpWzBdLnNwbGl0KCI/IilbMF19fQpmdW5jdGlvbiBzbHVnKHQpe3ZhciBzPSh0fHwiIikucmVwbGFjZSgvXHMrL2csIiAiKS50cmltKCk7cmV0dXJuIHMubGVuZ3RoPjI4P3Muc2xpY2UoMCwyOCkrIuKApiI6c30KZnVuY3Rpb24gdHQoKXt2YXIgdD1jPyJwYXRjaCAtICIrc2x1ZyhjKToicGF0Y2giO2RvY3VtZW50LnRpdGxlPXQ7dHJ5e3BhcmVudC5kb2N1bWVudC50aXRsZT10fWNhdGNoKGUpe319CmZ1bmN0aW9uIHJjKCl7dmFyIGU9Yy5yZXBsYWNlKC8mL2csIiZhbXA7IikucmVwbGFjZSgvPC9nLCImbHQ7IikucmVwbGFjZSgvPi9nLCImZ3Q7IikucmVwbGFjZSgvIi9nLCImcXVvdDsiKTskaSgiY29udGVudCIpLmlubmVySFRNTD1lLnJlcGxhY2UoLyhodHRwcz86XC9cL1teXHM8XSspL2csJzxhIGhyZWY9IiQxIiB0YXJnZXQ9Il9ibGFuayI+JDE8L2E+Jyl9CndpbmRvdy5lPWZ1bmN0aW9uKCl7dmFyIGU9JGkoImVkaXRvciIpO2UudmFsdWU9YztlLmhpZGRlbj0wO3ZhciBiPSRpKCJidG4iKTtiLnZhbHVlPSJzYXZlIjtiLm9uY2xpY2s9czskaSgidmlldyIpLmhpZGRlbj0xOyRpKCJoaW50IikuaW5uZXJIVE1MPSJtYXggIitNOyRpKCJoaW50IikuaGlkZGVuPTA7ZS5mb2N1cygpfQp3aW5kb3cucz1mdW5jdGlvbigpe3ZhciB2PSRpKCJlZGl0b3IiKS52YWx1ZTtpZih2Lmxlbmd0aD5NKXskaSgiaGludCIpLmlubmVySFRNTD0ibWF4ICIrTTtyZXR1cm59Yz12OyRpKCJwYXRjaCIpLnRleHRDb250ZW50PWM7cmMoKTt0dCgpO3ZhciBiPSRpKCJidG4iKTtiLnZhbHVlPSJlZGl0IjtiLm9uY2xpY2s9ZTskaSgiZWRpdG9yIikuaGlkZGVuPTE7JGkoInZpZXciKS5oaWRkZW49MDskaSgiaGludCIpLmhpZGRlbj0xOyhhc3luYyBmdW5jdGlvbigpe3ZhciBoPSI8IURPQ1RZUEUgaHRtbD5cbiIrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTCxjcz1uZXcgQ29tcHJlc3Npb25TdHJlYW0oImRlZmxhdGUtcmF3IiksZz1jcy53cml0YWJsZS5nZXRXcml0ZXIoKSxjaD1bXSxuPTA7Zy53cml0ZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoaCkpO2cuY2xvc2UoKTt2YXIgcmQ9Y3MucmVhZGFibGUuZ2V0UmVhZGVyKCkseDtmb3IoOzspe3g9YXdhaXQgcmQucmVhZCgpO2lmKHguZG9uZSlicmVhaztjaC5wdXNoKHgudmFsdWUpO24rPXgudmFsdWUubGVuZ3RofXZhciBvPW5ldyBVaW50OEFycmF5KG4pLHA9MCxpO2ZvcihpPTA7aTxjaC5sZW5ndGg7aSsrKXtvLnNldChjaFtpXSxwKTtwKz1jaFtpXS5sZW5ndGh9cGFyZW50LmxvY2F0aW9uLmhyZWY9YmFzZSgpKyI/dj0iK0RhdGUubm93KCkrIiMiK1ArYjY0KG8pfSkoKX0KcmMoKTt0dCgpOwp9KSgpCjwvc2NyaXB0PjwvYm9keT48L2h0bWw+'),q=>q.charCodeAt(0)));const doc=tpl.replace('@@C@@',esc);const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()})()
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
