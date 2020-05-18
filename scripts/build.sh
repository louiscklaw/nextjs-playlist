#!/usr/bin/env bash

set -ex

rm -rf .next
rm -rf static_build

yarn build

yarn export

cd static_build
 serve -s .

cd ..