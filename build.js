//
// build.js — pack the whole app into a URL and emit the publishable pages.
//
// Pipeline:  app.html -> deflate-raw (native zlib) -> base64url -> p1: payload
// Final artifact is the URL:  booter.html#p1:<payload>
// booter.html unpacks the fragment back into the site.
//
// Emits:
//   index.html     GitHub Pages entry — instant-redirect to booter.html#payload
//                  (so the site root serves the default patch)
//   dist/URL.txt   the full shareable URL (local build record, gitignored)
//   dist/payload.txt / dist/payload.bin  (diagnostics)
// (booter.html is a committed source file, published as-is.)
//
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(n); return (i >= 0 && i + 1 < args.length) ? args[i + 1] : null; };
// The booter page the payload/redirect points at. Relative by default so the
// site works under any GitHub Pages path (e.g. /patch/). Override with --base.
const base = flag('--base') || 'booter.html';

const appPath = path.join(__dirname, 'app.html');
const app = fs.readFileSync(appPath, 'utf8');

// deflate-raw (matches the browser's native DecompressionStream('deflate-raw'))
const bytes = zlib.deflateRawSync(Buffer.from(app, 'utf8'));

// base64url, no padding (matches the browser btoa/atob path)
const b64 = bytes.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const payload = 'p1:' + b64;
const url = base + '#' + payload;

// ---- GitHub Pages entry: root -> booter.html#payload ---------------------
// A tiny instant redirect so https://<user>.github.io/<repo>/ serves the
// default patch. battery of two fallbacks: meta refresh + JS replace.
const indexHtml =
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">'
  + '<title>patch</title>'
  + '<meta http-equiv="refresh" content="0;url=' + url + '">'
  + '</head>'
  + '<body text="#1a1814" marginheight="18" marginwidth="10">'
  + '<p>opening…</p>'
  + '<script>location.replace("' + url + '");</script>'
  + '</body></html>';
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');

// ---- dist/ local record ---------------------------------------------------
const dist = path.join(__dirname, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'URL.txt'), url + '\n', 'utf8');
fs.writeFileSync(path.join(dist, 'payload.txt'), payload, 'utf8');
fs.writeFileSync(path.join(dist, 'payload.bin'), bytes);

const raw = Buffer.byteLength(app, 'utf8');
const compressedRaw = bytes.length;
console.log('booter base : ' + base);
console.log('app size    : ' + raw + ' bytes (utf8)');
console.log('deflate-raw : ' + compressedRaw + ' bytes  (' + (100 * (1 - compressedRaw / raw)).toFixed(0) + '% smaller)');
console.log('base64url   : ' + b64.length + ' chars');
console.log('payload     : ' + payload.length + ' chars (fragment after "#")');
console.log('FULL URL    : ' + url.length + ' chars');
console.log('wrote index.html (redirect), dist/URL.txt, dist/payload.txt, dist/payload.bin');