# Eigen UI

Desktop UI and (opinionated) UX system based on the idea of eigengrau, a color we see when we close our eyes.

Currently developed on Debian Trixie using Xorg+Openbox.

## Roadmap

### First phase: extra minimal

* Openbox window theme
* gmrun on startup, check styling options
* On startup, in `openbox/autostart.sh`
	* Don't have an explicit resolution but rather set preferred on for the active screen, i.e. 1920x1200 on laptop and 1920x1080 for TV
	* Don't have an explicit brightness for laptop screen, looks to explicit?
* Test `setup.sh` to see if it's working as expected: is it safe to use `~` in the bash script?
* [END] Add a screenshot to Readme.md, and add an entry to retrovizor.xyz about this project

### Future

* Define a proper color scheme in the form of an HTML file
* Openbox keybinding: combination to change active keymap (based on defined choices)
* Home screen: battery, wifi, poweroff/on/logout dialog
* Special keys: volume up|down, brightness up|dowm, touchpad on|off
* Auto-start startx
* Login screen
* Screen lock
* Complete terminal color scheme
* Syntax highlighting color scheme
* Skins for common programs: icecat, chromium
* Workspaces like on Mac:
	* Defaults to 1 workspace
	* Each window in fullscreen mode becomes a standalone workspace
	* When exiting fullscreen a window is moved to the first workspace

## Design system

### Typography

* Fira Code as monospace, github.com/tonsky/FiraCode
* Barlow as sans-serif, github.com/jpt/barlow
* Gelasio as serif, github.com/SorkinType/Gelasio

### Color scheme

* Base: #16161D

### Window theme

* EigenUI, in `themes/EiegenUI`, linked with `~/.local/share/themes/EigenUI` folder

## Configurations and scripts

* Configuration dotfiles in `dotfiles` folder
* Script `setup.sh` creates all symbolic links in default location (~)

## Packages / Dependencies

* Xorg, `apt-get install xorg`
* Openbox, `apt-get install openbox`
* Xterm, `apt-get install xterm`
* gmrun, `apt-get install gmrun`
* tmux, `apt-get install tmux`

## Behaviour

* For now, start the UI with `startx`
* Use xrandr to set resolution, e.g. `xrandr -s 1920x1200`
* Startup behaviour is defined in `config/openbox/autostart.sh`

## Keybindings

* Switch between workspaces: ctrl+alt+left|right
* Run terminal: Super+e
* Xterm: toogle fullscreen: Alt+Enter
* Paste into terminal: select a text, click middle-mouse inside a terminal
* Copy from terminal: select a text, click middle-mouse outside a terminal

## Development notes

* XTerm is configured in `~/.Xresources`
* Reconfigure Openbox with `openbox --reconfigure`
* Keybindings are in `dotfiles/config/openbox/rc.xml`

