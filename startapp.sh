#!/usr/bin/env bash


nohup broadwayd $BROADWAY_DISPLAY &
sleep 1

cd /config/app
yarn
yarn compile
yarn rollup
yarn start --dark

 
