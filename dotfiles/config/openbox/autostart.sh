#!/bin/bash

PROJECT_BASE="/home/vjekoart/Projects/eigen-ui"
HOME_BASE="/home/vjekoart"

xrandr -s 1920x1200 &
xrandr --output eDP-1 --brightness 0.66 &
hsetroot -cover "$PROJECT_BASE/images/bg.png" &
compton &
exec xrdb -merge "$HOME_BASE/.Xresources" &

# Program startup
xterm tmux &
