#!/usr/bin/env bash
set -e
echo ">>> Start app in $NODE_ENV"

if [ "$NODE_ENV" == "production" ] || [ "$NODE_ENV" == "staging" ] ; then
  npm run build && npm run start
else
  npm run start-dev
fi
