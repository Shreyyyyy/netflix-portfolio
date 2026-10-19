#!/usr/bin/env bash
# Install dependencies on first run, then start the Vite dev server.
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  npm install
fi

exec npm run dev -- "$@"
