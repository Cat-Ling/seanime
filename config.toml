#!/bin/sh
set -e

apk add --no-cache curl tar

# Fetch the latest version
VERSION=$(curl -sSL https://github.com/5rahim/seanime/releases/latest/download/latest.json | grep -oE '"version": "[^"]*' | cut -d'"' -f4)

# Download and extract seanime
curl -sSLO https://github.com/5rahim/seanime/releases/latest/download/seanime-${VERSION}_Linux_x86_64.tar.gz
tar -xzf seanime-${VERSION}_Linux_x86_64.tar.gz
chmod +x seanime

# Prepare data directory
mkdir -p /data

# Download config.toml
curl -sSL -o /data/config.toml https://github.com/Cat-Ling/seanime/raw/refs/heads/main/config.toml

# Update version field in config.toml
sed -i "s/^version = '.*'/version = '${VERSION}'/" /data/config.toml

# Run seanime
./seanime -datadir /data
