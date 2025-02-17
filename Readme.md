# Eigen UI

UI system based on the idea of eigengrau, a color we see when we close our eyes.

Intended for usage in Xorg+Openbox environments. Contains configuration files for various
programs.

## Todo

* CONT: fine-tune shortcuts
* Before
    * Check what's the purpose of .xprofile? I run the same thing in autostart.sh
    * Try to remove everything except my custom binding from rc.xml
* XTerm styling and fullscreen mode as default, incl. font
* Openbox styling: desktop background, windows, incl. font
* Openbox keybinding: combination to change active keymap (based on defined choices)
* Home screen: battery, wifi, poweroff/on/logout dialog
* Home screen: big gmrun placeholder
* gmrun styling
* Auto-start startx
* Login screen
* Screen lock

## Design system

### Typography

TBD

### Color scheme

TBD

## Components

* Configuration dotfiles in `dotfiles` folder
* Script `setup.sh` creates all symbolic links in default location (~)

## Packages

* Xorg, `apt-get install xorg`
* Openbox, `apt-get install openbox`
* Xterm, `apt-get install xterm`
* gmrun, `apt-get install gmrun`

## Behaviour

* For now, start the UI with `startx`
* Use xrandr to set resolution, e.g. `xrandr -s 1920x1200`
* Startup behaviour is defined in `config/openbox/autostart.sh`

## Keybindings

* Switch between workspaces: ctrl+alt+left|right
* Run terminal: Super+e

## Development notes

* XTerm is configured in `~/.Xresources`
* Reconfigure Openbox with `openbox --reconfigure`
* Keybindings are in `dotfiles/config/openbox/rc.xml`

