#!/usr/bin/env bash

broadway(){
nohup gtk4-broadwayd $BROADWAY_DISPLAY 
}
gnomeapp(){
gjs -m _compiled/src/main.js --dark
}

broadway &
gnomeapp  
