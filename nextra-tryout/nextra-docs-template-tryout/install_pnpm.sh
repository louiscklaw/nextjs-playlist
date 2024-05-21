#!/usr/bin/env bash

set -ex

wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

source /root/.bashrc
