//
// verify.js — reverse the build and confirm the URL round-trips losslessly.
// Reads dist/URL.txt, decodes base64url -> inflate -> compare app.html.
//
// Usage: node verify.js
//
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const url = fs.readFileSync(path.join(__dirname, 'dist', 'URL.txt'), 'utf8').trim();
const hash = url.indexOf('#');
if (hash < 0) { console.error('URL has no # payload'); process.exit(1); }
const frag = url.slice(hash + 1);
if (frag.slice(0, 3) !== 'p1:') { console.error('payload missing p1: prefix'); process.exit(1); }

let s = frag.slice(3).replace(/-/g, '+').replace(/_/g, '/');
while (s.length % 4) s += '=';
const bytes = Buffer.from(s, 'base64');
const html = zlib.inflateRawSync(Buffer.from(bytes)).toString('utf8');

const app = fs.readFileSync(path.join(__dirname, 'app.html'), 'utf8');
if (html === app) {
  console.log('VERIFY PASS — packed URL inflates back to exactly app.html');
    console.log('  ' + url);
    console.log('  payload length: ' + frag.length + ' chars');
  process.exit(0);
} else {
  console.error('VERIFY FAIL — decoded html differs from app.html');
  console.error('  decoded: ' + html.length + ' chars, app: ' + app.length + ' chars');
  process.exit(1);
}