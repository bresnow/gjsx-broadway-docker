#!/usr/bin/env bash

nohup broadwayd $BROADWAY_DISPLAY &
sleep 5
gjs -m /config/browser.js &
cd /config/proxy
yarn
node index.js
