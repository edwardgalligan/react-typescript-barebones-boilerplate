#!/usr/bin/env bash
# vim: et ts=4 sw=4 ff=unix

./node_modules/.bin/tsc
node server.js
./node_modules/.bin/browserify --entry web.js --outfile public/web.js
echo "Build complete!"