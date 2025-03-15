#!/bin/bash

PROJECT_BASE="/home/vjekoart/Projects/eigen-ui"
HOME_BASE="/home/vjekoart"

xrandr -s 1920x1200 &
xrandr --output eDP-1 --brightness 0.66 &
xsetroot -bitmap "$PROJECT_BASE/images/bg.bitmap" -bg "#16161D" -fg "#1F1F26" &
exec xrdb -merge "$HOME_BASE/.Xresources" &
