#!/bin/bash

PROJECT_BASE="/home/vjekoart/Projects/eigen-ui"
HOME_BASE="/home/vjekoart"
DEFAULT_MONITOR="eDP-1"

xrandr --output "$DEFAULT_MONITOR" --mode 1920x1200 --brightness 0.66 &

hsetroot -cover "$PROJECT_BASE/images/bg.png" &
compton &

xrdb -merge "$HOME_BASE/.Xresources" &

# Program startup
xterm tmux &
