#!/usr/bin/env bash

rm -rf .next
rm -rf node_modules/*

set -ex

npm i -D
npx browserslist@latest --update-db

npm run dev
