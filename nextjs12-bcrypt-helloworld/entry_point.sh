#!/usr/bin/env bash

rm -rf .next

set -ex

npm i

npm run build
npm run start
