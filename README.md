# patch

A website that lives inside a **single URL**. No server, no framework, no
dependencies — the only thing you host is a tiny booter page, and the whole
app (HTML + JS) travels inside the URL's fragment.

Open the URL and the app is unpacked — natively decompressed and decoded from
the fragment, in your browser, with no network after the first load. Edit the
text, hit save, and the site **re-packs itself and redirects to a brand-new
URL** (which lands in the address bar). Share that URL; it *is* the edited page.

Brutalist by design: monospace, all-lowercase, muted title, and **no CSS** —
only HTML presentational attributes.

```
booter.html#p1:<base64url( deflate-raw( app.html ) )>
```

## Build

```sh
node build.js   # emits index.html (GH Pages redirect) + dist/URL.txt
node verify.js  # confirms the pack round-trips losslessly
```

`node build.js` produces:
- **`index.html`** — the GitHub Pages entry: instant-redirect to
  `booter.html#<payload>`, so the site root serves the default patch.
- **`dist/URL.txt`** — the full shareable URL (local record, gitignored).

## Publish to GitHub Pages

1. Host the repo on GitHub. `index.html` (redirect) and `booter.html` (loader)
   at the repo root are what get served.
2. In **Settings → Pages**, deploy from the branch (or a `gh-pages` branch / a
   `docs/` folder) — because the booter + redirect use relative URLs, it works
   at any path (`https://<user>.github.io/patch/`).
3. The root URL opens the default patch; a saved patch is a URL ending in
   `booter.html#p1:<new payload>`, shareable directly.

## Files

| File | Role |
|------|------|
| `index.html` | GH Pages entry — redirects to the booter + payload (generated). |
| `booter.html` | The tiny hosted loader — unpacks a `#p1:…` payload (published as-is). |
| `app.html` | **The website source** — becomes the payload. |
| `build.js` | Packs `app.html` → payload, emits `index.html` + `dist/`. |
| `verify.js` | Node lossless round-trip check of the packed URL. |
| `ENCODING.md` | Full spec of the URL-scheme (pipeline, format, re-pack, limits). |

`dist/` (URL.txt, payload.txt, payload.bin) is a local build record and is
gitignored.

## Why

Every byte of a webpage — markup, logic, content — compressed and encoded into
one sharable URL. The browser renders it fresh each open. No account, no DB,
no deploy: the URL *is* the artifact.