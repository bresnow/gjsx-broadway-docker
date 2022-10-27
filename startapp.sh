#!/usr/bin/env bash

broadway(){
nohup gtk4-broadwayd $BROADWAY_DISPLAY &> /var/log/broadway.log
}
gnome-app(){
yarn
yarn watch &
sleep 5
yarn start $1
}

broadway &
gnome-app --dark &
