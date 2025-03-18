#!/bin/bash

EIGEN_UI="/home/vjekoart/Projects/eigen-ui"

ln -s "$EIGEN_UI/dotfiles/bash_profile" ~/.bash_profile
ln -s "$EIGEN_UI/dotfiles/xinitrc" ~/.xinitrc
ln -s "$EIGEN_UI/dotfiles/Xresources" ~/.Xresources

ln -s "$EIGEN_UI/dotfiles/config/openbox/autostart.sh" ~/.config/openbox/autostart.sh
ln -s "$EIGEN_UI/dotfiles/config/openbox/rc.xml" ~/.config/openbox/rc.xml
ln -s "$EIGEN_UI/dotfiles/config/compton.conf" ~/.config/compton.conf

# Fonts
mkdir -p ~/.local/share/fonts/fira
cp -r "$EIGEN_UI/fonts/fira/*" ~/.local/share/fonts/fira

mkdir -p ~/.local/share/fonts/barlow
cp -r "$EIGEN_UI/fonts/barlow/*" ~/.local/share/fonts/barlow

mkdir -p ~/.local/share/fonts/gelasio
cp -r "$EIGEN_UI/fonts/gelasio/*" ~/.local/share/fonts/gelasio

mkdir -p ~/.config/fontconfig
ln -s "$EIGEN_UI/dotfiles/config/fontconfig/fonts.conf" ~/.config/fontconfig/fonts.conf
fc-cache

# Themes
mkir -p ~/.local/share/themes/EigenUI/openbox-3
ln -s "$EIGEN_UI/themes/EigenUI/openbox-3/themerc" ~/.local/share/themes/EigenUI/openbox-3/themerc

mkdir -p ~/.vim/colors
ln -s "$EIGEN_UI/themes/eigenui.vim" ~/.vim/colors/eigenui.vim

# Programs
ln -s "$EIGEN_UI/dotfiles/tmux.conf" ~/.tmux.conf

mkdr -p ~/.config/rofi
ln -s "$EIGEN_UI/dotfiles/config/rofi/config.rasi" ~/.config/rofi/config.rasi
ln -s "$EIGEN_UI/dotfiles/config/rofi/eigen.rasi" ~/.config/rofi/eigen.rasi

