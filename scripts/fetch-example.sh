#!/usr/bin/env bash

set -ex

rm -rf tmp
mkdir -p tmp

cd tmp
  rm -rf gatsby
  git clone --depth=1 git@github.com:vercel/next.js.git
cd ..


rm -rf offical-example
mkdir -p offical-example

cd offical-example
  rm -rf * &
  rm -rf .* &
  wait

  rsync -avzh ../tmp/next.js/examples/ .
cd ..

rm -rf tmp