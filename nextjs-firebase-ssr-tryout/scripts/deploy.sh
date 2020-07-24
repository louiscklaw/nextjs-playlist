#!/usr/bin/env bash

set -ex

cd functions
  # yarn build
  rm -rf .next

  firebase deploy

cd ..
