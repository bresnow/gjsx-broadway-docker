#!/usr/bin/env bash

nohup broadwayd :5 &

sleep 5

#xfce4-terminal
#remmina
#nautilus
#gnome-terminal
#/tilix/tilix
#midori

cd /app
gjs -m gjs/text.js