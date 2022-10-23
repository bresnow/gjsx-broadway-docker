#!/usr/bin/env bash


nohup gtk4-broadwayd $BROADWAY_DISPLAY &> /var/log/broadway.log &
cd /home/app
yarn
yarn watch &
sleep 5
yarn start --dark
