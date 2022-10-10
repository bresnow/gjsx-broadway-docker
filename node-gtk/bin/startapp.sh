#!/usr/bin/env bash

nohup broadwayd :5 &

sleep 5
gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'

cd /config
git clone https://github.com/romgrk/node-gtk-template.git
cd node-gtk-template
yarn
yarn start