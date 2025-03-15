# Eigen UI

UI system based on the idea of eigengrau, a color we see when we close our eyes.

Intended for usage in Xorg+Openbox environments. Contains configuration files for various
programs.

## Roadmap

### First phase: extra minimal

* Define color scheme in the form of an HTML file
* Set default OS serif, sans-serif and monospace font, test on web browser with default values
* Openbox window theme
* Terminal color palette: identify and change that painful blue color
	* Color is okay if run outside tmux?
* Copy from terminal
* Scrolling in terminal, e.g. when in ctrl+b [ mode in tmux
* gmrun on startup, check styling options
* On startup, in `openbox/autostart.sh`, don't have an explicit resolution but rather set preferred on
  for the active screen, i.e. 1920x1200 on laptop and 1920x1080 when connected to a TV
* Maybe, reverse touchpad scrolling direction
* Maybe, a skin for Firefox
* Test `setup.sh` to see if it's working as expected: is it safe to use `~` in the bash script?
* [END] Add a screenshot to Readme.md, and add an entry to retrovizor.xyz about this project

### Future

* Openbox keybinding: combination to change active keymap (based on defined choices)
* Home screen: battery, wifi, poweroff/on/logout dialog
* Special keys: volume up|down, brightness up|dowm, touchpad on|off
* Auto-start startx
* Login screen
* Screen lock
* Complete terminal color scheme
* Syntax high-lighting color scheme
* Workspaces like on Mac:
	* Defaults to 1 workspace
	* Each window in fullscreen mode becomes a standalone workspace
	* When exiting fullscreen a window is moved to the first workspace

## Design system

### Typography

* Fira Mono, in `fonts/fira`, copied to `~/.local/share/fonts/fira` folder

### Color scheme

* Base: #16161D

### Theme

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
* Paste into terminal: select a text, click middle-mouse inside terminal

## Development notes

* XTerm is configured in `~/.Xresources`
* Reconfigure Openbox with `openbox --reconfigure`
* Keybindings are in `dotfiles/config/openbox/rc.xml`

