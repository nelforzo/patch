# patch — URL encoding spec

The product is a **single URL**. Opening it renders a complete website; every
byte of that website (HTML, CSS, JS — the whole app in `app.html`) travels
inside the URL itself. There is no hosted page except a tiny fixed "booter".

```
https://<host>/booter.html#<payload>
```

`<payload>` is everything after the `#`. The server/host only ever sees the
booter URL — the payload is client-side only, works offline after first load,
and is never sent over the wire on request 2..n (it's a fragment).

---

## 1. Pipeline

```
app.html                      a single self-contained HTML doc (the app/site)
   │  deflate-raw             native zlib compression (zlib.deflateRawSync)
   ▼                             = browser DecompressionStream('deflate-raw')
bytes
   │  base64url               standard base64, then +→-, /→_, strip trailing =
   ▼
payload  =  "p1:" + base64url(deflate-raw(app.html))

URL      =  booter-base + "#" + payload
```

Version prefix `p1:` lets the format evolve (a future `p2:` could switch the
codec) without breaking old URLs.

- **Compress**: `zlib.deflateRawSync(app)` (Node, build time).
- **Encode**: `bytes.toString('base64')` then `.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')`.
- **Typical numbers**: `app.html` ≈ 2.9 KB → deflate ≈ 1.4 KB (−54%) → base64url ≈ 1.8 KB payload → ~1.8 KB URL.

### The app is deliberately brutalist
`app.html` is one self-contained file: no frameworks, no external scripts, no
CSS at all. Styling uses **only HTML presentational attributes** (`bgcolor`,
`text`, `link`, `font`, `hr`, `center`, `hidden`, input/button attributes, …) —
no `<style>` blocks, no `style="…"` inline CSS, no `class=`. This keeps the
payload tiny and the page renderable anywhere with zero dependencies. The
booter (`booter.html`) follows the same rule.

### Typical numbers
`app.html` ≈ 2.6 KB → deflate ≈ 1.3 KB (−50%) → base64url ≈ 1.7 KB payload →
~1.7 KB URL.

### Why deflate-raw
No npm dependencies. Node's `zlib` produces it at build time, and every modern
browser inflates it natively with `new DecompressionStream('deflate-raw')` —
so **both encode and decode are native and dependency-free**. (The encoding
ladder in the original draft — base91, lz-string — is unnecessary now that the
goal is a full site in a URL rather than minimal QR bytes.)

### Why the fragment (option B), not a `data:` URI
- The server sees only `booter.html`; the payload stays out of logs/caches.
- It works over `file://` and after a single load with no network.
- Editing stays possible in-browser (see §4).

---

## 2. The booter (`booter.html`)

The only thing you must host. It is ~80 lines, has no dependencies, and its job
is to unpack one payload: read `#p1:…`, base64url-decode, `DecompressionStream`
inflate, then put the result into a **same-origin `srcdoc` iframe**. The iframe
gets a full HTML document (its own `<head>`, `<style>`, `<script>`), so the app
runs whole, contained.

- Wrong/missing payload → a short "needs a `#p1:` payload" page.
- Corrupt payload / bad inflate → a readable error page.
- The iframe is same-origin (srcdoc inherits the booter's origin), so the app
  can read `parent.location.href` — that's how it knows its own full URL.

---

## 3. How a user gets the URL

Run:

```
node build.js
```

This writes `dist/URL.txt` (the full shareable URL), `dist/payload.txt` (just
the `#p1:…` payload), and `dist/payload.bin` (the raw deflate bytes). Point
`--base` at wherever you host `booter.html`:

```
node build.js --base https://you.github.io/you/patch/booter.html
```

Verify the pack losslessly round-trips (decode → inflate → compare to app.html):

```
node verify.js
```

---

## 4. Editing — the URL re-creates itself

Because the app is *inside* the URL, "saving an edit" means **generating a new
URL**, not writing to storage. `app.html`'s app keeps the current patch text in
a `<script type="text/plain" id="patch">` element (raw text, so no JS-escaping).
On **Save** it:

1. swaps that element's text to the new content,
2. serializes its own live document: `'<!DOCTYPE html>\n' + document.documentElement.outerHTML`,
3. re-packs it **in the browser** with the exact inverse of §1:
   `CompressionStream('deflate-raw')` → base64url → `p1:` payload,
4. sets `parent.location.href = booterBase + '#' + payload`.

Step 4 **redirects the top window to the new URL**. The browser reloads the
booter, which unpacks the edited site; the new URL now sits in the address bar
(no in-page URL clutter — the app shows no URL; the user just copies it from
the bar or a `copy url` button). Nothing is stored anywhere; the new URL *is*
the edited site. This re-pack + redirect works fully client-side and survives
a round-trip (verified in the browser E2E).

---

## 5. Correctness & limits

- **Lossless**: `deflate-raw` + base64 round-trip is byte-exact (unlike the
  earlier QR path, no multi-byte/UTF-8 corruption — the whole document travels
  as a base64-url ASCII string).
- **Size**: the only real bound is comfortable sharing, not a spec ceiling.
  A browser URL can carry tens of KB in the fragment; this app is ~4–9 KB.
  It will never fit a QR code (that's a ~2.9 KB ceiling) — treat a QR as a
  possible pointer to the URL, not a carrier of the site.
- **Content length**: the app enforces a **hard limit of 5000 characters** on
  a patch's content. That comfortably fits ~5–6 paragraphs of English prose
  (≈700+ words) while keeping the packed URL modest. The editor shows a small
  static hint — `max 5000 characters` — under the input; it does **not** count
  as you type. If the user tries to save more than the limit, save is simply
  blocked (a `too long` warning replaces the hint, the editor stays open) —
  the browser still renders any pre-existing over-limit payload, the limit
  only governs new saves.
- **Verification**:
  - `node verify.js` — Node: build → inflate round-trip equals `app.html`.
  - `node scripts/optional-browser-e2e.js` — real Chromium:
    boot (booter unpacks) → edit → save (re-pack) → Node inflate of the new URL
    → reopen the new URL and read the edited content. All four stages pass.

---

## 6. Reference / mirror of the pieces

| File | Role |
|------|------|
| `app.html` | **The website** — full self-contained source that becomes the URL data. Kept in-repo as the build source / reference. |
| `booter.html` | The tiny hosted shell (only thing that must be deployed). |
| `build.js` | Packs `app.html` → `booter.html#p1:…` and emits `dist/`. |
| `verify.js` | Node lossless round-trip check of the packed URL. |
| `dist/URL.txt` | The deliverable URL (gitignored; regenerate with `node build.js`). |