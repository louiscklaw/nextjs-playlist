#!/usr/bin/env bash

set -ex

# rm -rf node_modules || true
# rm -rf /tmp/metro-* || true

yarn --dev

npx browserslist@latest --update-db

sudo npx kill-port 3000

yarn start
