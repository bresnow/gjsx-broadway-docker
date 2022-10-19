#!/usr/bin/env bash


nohup gtk4-broadwayd $BROADWAY_DISPLAY &

cd /config/app
yarn
yarn compile
yarn start
