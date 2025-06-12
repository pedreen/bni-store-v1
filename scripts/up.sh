#!/bin/bash

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

[[ ! -f "${CURRENT_DIR}/../config/local.xml" ]] && echo "Create <config/local.xml> file before proceeding!" && exit 1

echo "Starting services..."
docker compose -f "${CURRENT_DIR}/../compose.yml" up -d

echo "Updating permissions for writeable dirs..."
sudo chmod a+w "${CURRENT_DIR}/../logs"
sudo chmod a+w "${CURRENT_DIR}/../reports"
sudo chmod a+w "${CURRENT_DIR}/../media"
