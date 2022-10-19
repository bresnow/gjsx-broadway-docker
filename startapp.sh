#!/usr/bin/env bash


nohup broadwayd $BROADWAY_DISPLAY &

cd /config/app
yarn 
yarn compile
yarn start 
