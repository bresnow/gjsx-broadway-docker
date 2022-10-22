#!/usr/bin/env bash


nohup gtk4-broadwayd $BROADWAY_DISPLAY &
cd /home/app
yarn
yarn watch &
sleep 5
yarn start --dark
