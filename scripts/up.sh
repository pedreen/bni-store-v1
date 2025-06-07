#!/bin/bash

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

[[ ! -f "${CURRENT_DIR}/../config/local.xml" ]] && echo "Create <config/local.xml> file before proceeding!" && exit 1

echo "Starting services..."
docker-compose -f "${CURRENT_DIR}/../docker-compose.yml" up -d

echo "Updating permissions for writeable dirs..."
docker-compose -f "${CURRENT_DIR}/../docker-compose.yml" exec magento chmod a+w /var/www/html/var/log -R
docker-compose -f "${CURRENT_DIR}/../docker-compose.yml" exec magento chmod a+w /var/www/html/var/report -R
docker-compose -f "${CURRENT_DIR}/../docker-compose.yml" exec magento chmod a+w /var/www/html/media -R
