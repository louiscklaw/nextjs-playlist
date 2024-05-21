#!/usr/bin/env bash
# https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/

set -ex

npm init -y

npm install --save react react-dom next

mkdir pages
# touch pages/index.js
cp next_index.js pages/index.js

yarn build

npm install --save express
