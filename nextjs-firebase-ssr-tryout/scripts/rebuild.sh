#!/usr/bin/env bash

set -ex

cd functions
  rm -rf .next
  yarn build
cd ..