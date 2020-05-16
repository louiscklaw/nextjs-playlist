#!/usr/bin/env bash

set -ex

rm -rf *

npm init -y

cp /home/logic/_workspace/nextjs-playlist/template/package.json .


yarn add next react react-dom

mkdir pages
cp /home/logic/_workspace/nextjs-playlist/template/pages/index.js ./pages/index.js
