#!/bin/sh
set -e

apk add --no-cache curl tar
VERSION=$(curl -sSL https://github.com/5rahim/seanime/releases/latest/download/latest.json | grep -oP '(?<="version": ")[^"]*')
curl -sSLO https://github.com/5rahim/seanime/releases/latest/download/seanime-${VERSION}_Linux_x86_64.tar.gz
tar -xzf seanime-${VERSION}_Linux_x86_64.tar.gz
chmod +x seanime
mkdir -p /data
./seanime -datadir /data
