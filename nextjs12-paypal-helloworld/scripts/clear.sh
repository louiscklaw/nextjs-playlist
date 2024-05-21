#!/usr/bin/env bash

set -ex

rm -rf .next &
rm -rf node_modules &
rm -rf package-lock.json &

wait 
