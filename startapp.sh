#!/usr/bin/env bash

broadway(){
nohup gtk4-broadwayd $BROADWAY_DISPLAY &> /var/log/broadway.log
}
gnomeapp="gjs -m _compiled/main.js"

broadway &
$gnomeapp --dark  &> /var/log/gjsx.log
