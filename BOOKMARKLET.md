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
javascript:(async()=>{const c=document.title+'\n'+location.href;const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const tpl=new TextDecoder().decode(Uint8Array.from(atob('PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9dXRmLTg+PG1ldGEgbmFtZT12aWV3cG9ydCBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+cGF0Y2g8L3RpdGxlPjxzdHlsZT4KOnJvb3R7Y29sb3Itc2NoZW1lOmxpZ2h0IGRhcms7YmFja2dyb3VuZDojZmZmO2NvbG9yOiMxMTF9CiNjb250ZW50e3doaXRlLXNwYWNlOnByZS13cmFwfQp0ZXh0YXJlYSxpbnB1dHtmb250OmluaGVyaXQ7d2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkO2JhY2tncm91bmQ6aW5oZXJpdDtjb2xvcjppbmhlcml0fQpAbWVkaWEobWF4LXdpZHRoOjYyMHB4KXt0ZXh0YXJlYSxpbnB1dHttaW4taGVpZ2h0OjQ0cHh9fQphe2NvbG9yOiMwMGV9CkBtZWRpYShwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXs6cm9vdHtiYWNrZ3JvdW5kOiMxMTE7Y29sb3I6I2VlZX1he2NvbG9yOiM2Y2Z9fQo8L3N0eWxlPjwvaGVhZD4KPGJvZHk+PGJhc2Vmb250IGZhY2U9Im1vbm9zcGFjZSI+CjxiPnBhdGNoPC9iPgo8cCBpZD12aWV3PjxzcGFuIGlkPWNvbnRlbnQ+PC9zcGFuPjwvcD4KPHRleHRhcmVhIGlkPWVkaXRvciByb3dzPTcgaGlkZGVuPjwvdGV4dGFyZWE+Cjxmb250IGlkPWhpbnQgc2l6ZT0xIGhpZGRlbj48L2ZvbnQ+CjxpbnB1dCB0eXBlPWJ1dHRvbiBpZD1idG4gdmFsdWU9ZWRpdCBvbmNsaWNrPWUoKT4KPGRpdiBoaWRkZW4gaWQ9InBhdGNoIj5AQENAQDwvZGl2Pgo8c2NyaXB0PgooZnVuY3Rpb24oKXsKdmFyIFA9InAxOiIsTT0xNDUwLGM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhdGNoIikudGV4dENvbnRlbnQ7CmZ1bmN0aW9uICRpKHMpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX0KZnVuY3Rpb24gYjY0KHUpe3ZhciBiPSIiLGk7Zm9yKGk9MDtpPHUubGVuZ3RoO2krKyliKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHVbaV0pO3JldHVybiBidG9hKGIpLnJlcGxhY2UoL1wrL2csIi0iKS5yZXBsYWNlKC9cLy9nLCJfIikucmVwbGFjZSgvPSskLywiIil9CmZ1bmN0aW9uIGJhc2UoKXt0cnl7cmV0dXJuIHBhcmVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KCIjIilbMF0uc3BsaXQoIj8iKVswXX1jYXRjaChlKXtyZXR1cm4gbG9jYXRpb24uaHJlZi5zcGxpdCgiIyIpWzBdLnNwbGl0KCI/IilbMF19fQpmdW5jdGlvbiBzbHVnKHQpe3ZhciBzPSh0fHwiIikucmVwbGFjZSgvXHMrL2csIiAiKS50cmltKCk7cmV0dXJuIHMubGVuZ3RoPjI4P3Muc2xpY2UoMCwyOCkrIuKApiI6c30KZnVuY3Rpb24gdHQoKXt2YXIgdD1jPyJwYXRjaCAtICIrc2x1ZyhjKToicGF0Y2giO2RvY3VtZW50LnRpdGxlPXQ7dHJ5e3BhcmVudC5kb2N1bWVudC50aXRsZT10fWNhdGNoKGUpe319CmZ1bmN0aW9uIHJjKCl7dmFyIGU9Yy5yZXBsYWNlKC8mL2csIiZhbXA7IikucmVwbGFjZSgvPC9nLCImbHQ7IikucmVwbGFjZSgvPi9nLCImZ3Q7IikucmVwbGFjZSgvIi9nLCImcXVvdDsiKTskaSgiY29udGVudCIpLmlubmVySFRNTD1lLnJlcGxhY2UoLyhodHRwcz86XC9cL1teXHM8XSspL2csJzxhIGhyZWY9IiQxIiB0YXJnZXQ9Il9ibGFuayI+JDE8L2E+Jyl9CndpbmRvdy5lPWZ1bmN0aW9uKCl7dmFyIGU9JGkoImVkaXRvciIpO2UudmFsdWU9YztlLmhpZGRlbj0wO3ZhciBiPSRpKCJidG4iKTtiLnZhbHVlPSJzYXZlIjtiLm9uY2xpY2s9czskaSgidmlldyIpLmhpZGRlbj0xOyRpKCJoaW50IikuaW5uZXJIVE1MPSJtYXggIitNOyRpKCJoaW50IikuaGlkZGVuPTA7ZS5mb2N1cygpfQp3aW5kb3cucz1mdW5jdGlvbigpe3ZhciB2PSRpKCJlZGl0b3IiKS52YWx1ZTtpZih2Lmxlbmd0aD5NKXskaSgiaGludCIpLmlubmVySFRNTD0ibWF4ICIrTTtyZXR1cm59Yz12OyRpKCJwYXRjaCIpLnRleHRDb250ZW50PWM7cmMoKTt0dCgpO3ZhciBiPSRpKCJidG4iKTtiLnZhbHVlPSJlZGl0IjtiLm9uY2xpY2s9ZTskaSgiZWRpdG9yIikuaGlkZGVuPTE7JGkoInZpZXciKS5oaWRkZW49MDskaSgiaGludCIpLmhpZGRlbj0xOyhhc3luYyBmdW5jdGlvbigpe3ZhciBoPSI8IURPQ1RZUEUgaHRtbD5cbiIrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTCxjcz1uZXcgQ29tcHJlc3Npb25TdHJlYW0oImRlZmxhdGUtcmF3IiksZz1jcy53cml0YWJsZS5nZXRXcml0ZXIoKSxjaD1bXSxuPTA7Zy53cml0ZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoaCkpO2cuY2xvc2UoKTt2YXIgcmQ9Y3MucmVhZGFibGUuZ2V0UmVhZGVyKCkseDtmb3IoOzspe3g9YXdhaXQgcmQucmVhZCgpO2lmKHguZG9uZSlicmVhaztjaC5wdXNoKHgudmFsdWUpO24rPXgudmFsdWUubGVuZ3RofXZhciBvPW5ldyBVaW50OEFycmF5KG4pLHA9MCxpO2ZvcihpPTA7aTxjaC5sZW5ndGg7aSsrKXtvLnNldChjaFtpXSxwKTtwKz1jaFtpXS5sZW5ndGh9cGFyZW50LmxvY2F0aW9uLmhyZWY9YmFzZSgpKyI/dj0iK0RhdGUubm93KCkrIiMiK1ArYjY0KG8pfSkoKX0KcmMoKTt0dCgpOwp9KSgpCjwvc2NyaXB0PjwvYm9keT48L2h0bWw+'),q=>q.charCodeAt(0)));const doc=tpl.replace('@@C@@',esc);const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()
```

## What it does

From any page, it:

1. builds a patch whose content is `title\nurl`,
2. packs it exactly like the app does — the whole app document (with a live
   edit button, URL highlighting, and title-slug) wrapped in a `p1:` payload,
3. and opens the patch at `https://nelforzo.github.io/patch/booter.html#p1:...`.

So the resulting patch is fully editable: it shows the captured title and url,
highlights the url as a clickable link, and has the usual `edit` / `save`
controls.

## Rebuilding this file

`node make-bookmarklet.js` regenerates this doc from the current app.html,
so the bookmarklet always packs the same (up-to-date) app.
