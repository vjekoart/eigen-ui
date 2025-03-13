# Eigen UI

UI system based on the idea of eigengrau, a color we see when we close our eyes.

Intended for usage in Xorg+Openbox environments. Contains configuration files for various
programs.

## Roadmap

### First phase: extra minimal

* Define color scheme in the form of an HTML file
* Set default OS serif, sans-serif and monospace font, test on web browser with default values
* Openbox window theme
* Terminal color palette
* Copy/paste in/to terminal
* Scrolling in terminal, e.g. when in ctrl+b [ mode in tmux
* gmrun on startup, check styling options
* On startup, in `openbox/autostart.sh`, don't have an explicit resolution but rather set preferred on
  for the active screen, i.e. 1920x1200 on laptop and 1920x1080 when connected to a TV
* Maybe, split touchpad scrolling direction
* Maybe, a skin for Firefox
* Test `setup.sh` to see if it's working as expected: is it safe to use `~` in the bash script?

### Future

* Reverse scorlling direction with touchpad, mac-like
* Openbox keybinding: combination to change active keymap (based on defined choices)
* Home screen: battery, wifi, poweroff/on/logout dialog
* Special keys: volume up|down, brightness up|dowm, touchpad on|off
* Auto-start startx
* Login screen
* Screen lock

## Design system

### Typography

* Fira Mono, in `fonts/fira`, copied to `~/.local/share/fonts/fira` folder

### Color scheme

TBD

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

## Development notes

* XTerm is configured in `~/.Xresources`
* Reconfigure Openbox with `openbox --reconfigure`
* Keybindings are in `dotfiles/config/openbox/rc.xml`

