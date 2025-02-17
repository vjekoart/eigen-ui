#!/bin/bash

EIGEN_UI=~/eigen-ui

ln -s "$EIGEN_UI/dotfiles/xinitrc" ~/.xinitrc
ln -s "$EIGEN_UI/dotfiles/xprofile" ~/.xprofile
ln -s "$EIGEN_UI/dotfiles/Xresources" ~/.Xresources

ln -s "$EIGEN_UI/config/openbox/autostart.sh" ~/.config/openbox/autostart.sh
ln -s "$EIGEN_UI/config/openbox/rc.xml" ~/.config/openbox/rc.xml

# Fonts
mkdir -p ~/.local/share/fonts/fira
cp -r "$EIGEN_UI/fonts/fira/*" ~/.local/share/fonts/fira
fc-cache

# Themes
mkir -p ~/.local/share/themes/EigenUI/openbox-3/
ln -s "$EIGEN_UI/themes/EigenUI/openbox-3/themerc" ~/.local/share/themes/EigenUI/openbox-3/themerc
