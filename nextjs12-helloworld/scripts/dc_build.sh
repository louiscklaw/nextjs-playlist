#!/usr/bin/env bash 

set -ex

docker compose build

docker compose push
