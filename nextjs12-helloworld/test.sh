#!/usr/bin/env bash

set -ex

docker compose kill
docker compose down
docker compose build
docker compose up -d

sleep 1

docker compose exec -it next bash
