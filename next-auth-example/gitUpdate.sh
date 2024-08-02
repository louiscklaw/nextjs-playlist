#!/usr/bin/env bash

set -ex

git add .
git commit -m'update next-auth-example,'

git push
