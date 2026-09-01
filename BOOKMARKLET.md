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
javascript:(async()=>{const c=document.title+'\n'+location.href;const esc=c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const tpl=new TextDecoder().decode(Uint8Array.from(atob('PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9dXRmLTg+PG1ldGEgbmFtZT12aWV3cG9ydCBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+cGF0Y2g8L3RpdGxlPjxzdHlsZT4KOnJvb3R7Y29sb3Itc2NoZW1lOmxpZ2h0IGRhcmt9CiNjb250ZW50e3doaXRlLXNwYWNlOnByZS13cmFwfQp0ZXh0YXJlYSxpbnB1dHtmb250OmluaGVyaXQ7d2lkdGg6MTAwJX0KQG1lZGlhKG1heC13aWR0aDo2MjBweCl7dGV4dGFyZWEsaW5wdXR7bWluLWhlaWdodDo0NHB4fX0KQG1lZGlhKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspezpyb290e2JhY2tncm91bmQ6IzExMTtjb2xvcjojZWVlfWF7Y29sb3I6IzZjZn19Cjwvc3R5bGU+PC9oZWFkPgo8Ym9keT48YmFzZWZvbnQgZmFjZT0ibW9ub3NwYWNlIj4KPGI+cGF0Y2g8L2I+CjxwIGlkPXZpZXc+PHNwYW4gaWQ9Y29udGVudD48L3NwYW4+PC9wPgo8dGV4dGFyZWEgaWQ9ZWRpdG9yIHJvd3M9NyBoaWRkZW4+PC90ZXh0YXJlYT4KPGZvbnQgaWQ9aGludCBzaXplPTEgaGlkZGVuPjwvZm9udD4KPGlucHV0IHR5cGU9YnV0dG9uIGlkPWJ0biB2YWx1ZT1lZGl0IG9uY2xpY2s9ZSgpPgo8ZGl2IGhpZGRlbiBpZD0icGF0Y2giPkBAQ0BAPC9kaXY+CjxzY3JpcHQ+CihmdW5jdGlvbigpewp2YXIgUD0icDE6IixNPTE0NTAsYz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgicGF0Y2giKS50ZXh0Q29udGVudDsKZnVuY3Rpb24gJGkocyl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMpfQpmdW5jdGlvbiBiNjQodSl7dmFyIGI9IiIsaTtmb3IoaT0wO2k8dS5sZW5ndGg7aSsrKWIrPVN0cmluZy5mcm9tQ2hhckNvZGUodVtpXSk7cmV0dXJuIGJ0b2EoYikucmVwbGFjZSgvXCsvZywiLSIpLnJlcGxhY2UoL1wvL2csIl8iKS5yZXBsYWNlKC89KyQvLCIiKX0KZnVuY3Rpb24gYmFzZSgpe3RyeXtyZXR1cm4gcGFyZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoIiMiKVswXS5zcGxpdCgiPyIpWzBdfWNhdGNoKGUpe3JldHVybiBsb2NhdGlvbi5ocmVmLnNwbGl0KCIjIilbMF0uc3BsaXQoIj8iKVswXX19CmZ1bmN0aW9uIHNsdWcodCl7dmFyIHM9KHR8fCIiKS5yZXBsYWNlKC9ccysvZywiICIpLnRyaW0oKTtyZXR1cm4gcy5sZW5ndGg+Mjg/cy5zbGljZSgwLDI4KSsi4oCmIjpzfQpmdW5jdGlvbiB0dCgpe3ZhciB0PWM/InBhdGNoIC0gIitzbHVnKGMpOiJwYXRjaCI7ZG9jdW1lbnQudGl0bGU9dDt0cnl7cGFyZW50LmRvY3VtZW50LnRpdGxlPXR9Y2F0Y2goZSl7fX0KZnVuY3Rpb24gcmMoKXt2YXIgZT1jLnJlcGxhY2UoLyYvZywiJmFtcDsiKS5yZXBsYWNlKC88L2csIiZsdDsiKS5yZXBsYWNlKC8+L2csIiZndDsiKS5yZXBsYWNlKC8iL2csIiZxdW90OyIpOyRpKCJjb250ZW50IikuaW5uZXJIVE1MPWUucmVwbGFjZSgvKGh0dHBzPzpcL1wvW15cczxdKykvZywnPGEgaHJlZj0iJDEiIHRhcmdldD0iX2JsYW5rIj4kMTwvYT4nKX0Kd2luZG93LmU9ZnVuY3Rpb24oKXt2YXIgZT0kaSgiZWRpdG9yIik7ZS52YWx1ZT1jO2UuaGlkZGVuPTA7dmFyIGI9JGkoImJ0biIpO2IudmFsdWU9InNhdmUiO2Iub25jbGljaz1zOyRpKCJ2aWV3IikuaGlkZGVuPTE7JGkoImhpbnQiKS5pbm5lckhUTUw9Im1heCAiK007JGkoImhpbnQiKS5oaWRkZW49MDtlLmZvY3VzKCl9CndpbmRvdy5zPWZ1bmN0aW9uKCl7dmFyIHY9JGkoImVkaXRvciIpLnZhbHVlO2lmKHYubGVuZ3RoPk0peyRpKCJoaW50IikuaW5uZXJIVE1MPSJtYXggIitNO3JldHVybn1jPXY7JGkoInBhdGNoIikudGV4dENvbnRlbnQ9YztyYygpO3R0KCk7dmFyIGI9JGkoImJ0biIpO2IudmFsdWU9ImVkaXQiO2Iub25jbGljaz1lOyRpKCJlZGl0b3IiKS5oaWRkZW49MTskaSgidmlldyIpLmhpZGRlbj0wOyRpKCJoaW50IikuaGlkZGVuPTE7KGFzeW5jIGZ1bmN0aW9uKCl7dmFyIGg9IjwhRE9DVFlQRSBodG1sPlxuIitkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLGNzPW5ldyBDb21wcmVzc2lvblN0cmVhbSgiZGVmbGF0ZS1yYXciKSxnPWNzLndyaXRhYmxlLmdldFdyaXRlcigpLGNoPVtdLG49MDtnLndyaXRlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShoKSk7Zy5jbG9zZSgpO3ZhciByZD1jcy5yZWFkYWJsZS5nZXRSZWFkZXIoKSx4O2Zvcig7Oyl7eD1hd2FpdCByZC5yZWFkKCk7aWYoeC5kb25lKWJyZWFrO2NoLnB1c2goeC52YWx1ZSk7bis9eC52YWx1ZS5sZW5ndGh9dmFyIG89bmV3IFVpbnQ4QXJyYXkobikscD0wLGk7Zm9yKGk9MDtpPGNoLmxlbmd0aDtpKyspe28uc2V0KGNoW2ldLHApO3ArPWNoW2ldLmxlbmd0aH1wYXJlbnQubG9jYXRpb24uaHJlZj1iYXNlKCkrIj92PSIrRGF0ZS5ub3coKSsiIyIrUCtiNjQobyl9KSgpfQpyYygpO3R0KCk7Cn0pKCkKPC9zY3JpcHQ+PC9ib2R5PjwvaHRtbD4='),q=>q.charCodeAt(0)));const doc=tpl.replace('@@C@@',esc);const cs=new CompressionStream('deflate-raw');const g=cs.writable.getWriter();g.write(new TextEncoder().encode(doc));g.close();const rd=cs.readable.getReader();let ch=[],n=0;for(;;){const x=await rd.read();if(x.done)break;ch.push(x.value);n+=x.value.length;}const o=new Uint8Array(n);let p=0;ch.forEach(q=>{o.set(q,p);p+=q.length});let b='';for(let i=0;i<o.length;i+=0x8000)b+=String.fromCharCode.apply(null,o.subarray(i,i+0x8000));const u=btoa(b).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');location.href='https://nelforzo.github.io/patch/booter.html#p1:'+u;})()
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
