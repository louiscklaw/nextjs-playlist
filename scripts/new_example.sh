#!/usr/bin/env bash

set -ex

rm -rf */
ls -A1 | xargs rm -rf

read -p 'clean directory done. press any key...'

# npm init -y

cp /home/logic/_workspace/nextjs-playlist/template/package.json .

yarn install &

mkdir pages
cp /home/logic/_workspace/nextjs-playlist/template/pages/index.js ./pages/index.js

wait
