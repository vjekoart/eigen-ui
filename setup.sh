#!/bin/bash

ln -s "$EIGEN_UI/dotfiles/xinitrc" "~/.xinitrc"
ln -s "$EIGEN_UI/dotfiles/xprofile" "~/.xprofile"
ln -s "$EIGEN_UI/dotfiles/Xresources "~/.Xresources"

ln -s "$EIGEN_UI/config/openbox/autostart.sh" "~/.config/openbox/autostart.sh"
# TODO: missing rc.xml
