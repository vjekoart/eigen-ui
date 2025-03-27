# Eigen UI

Desktop UI and (opinionated) UX system for Linux. The goal is to create efficient, colorful experience based on the eigengrau color.

Currently developed on Debian Trixie using Xorg+Openbox.

**State:** possible to reproduce following scripts and documentation, but some local paths are hardcoded.

![Screenshot: Eigen UI start](screenshots/2025-03-16-eigen-ui-start-1920x1200.png)
![Screenshot: Eigen UI windows](screenshots/2025-03-16-eigen-ui-windows-1920x1200.png)

## Roadmap

* Define a proper color scheme in the form of an HTML file
* Extend `themes/eigenui.vim` colorscheme that should also be used as a terminal color scheme
* Add IceCat and Chromium themes
* Keybinding: change active keymap, `setxkbmap us|hr`
* ---
* Special keys: volume up|down, mute, brightness up|dowm, touchpad on|off, play/pause, next/prev
* Core feeling:
    * Home screen: time, battery, network/wifi, shutdown/restart/logout
    * Login screen
    * Screen lock
* Windows: custom icon pack with retro machine feeling
* Cursor:
    * Custom icon pack
    * Cursor disappears after a couple of seconds of inactivity
* Workspaces:
	* Defaults to 1 workspace
	* Each window in fullscreen mode becomes a standalone workspace
	* When exiting fullscreen a window is moved to the first workspace

## Design system

* Typography
	* Fira Code as monospace, github.com/tonsky/FiraCode
	* Barlow as sans-serif, github.com/jpt/barlow
	* Gelasio as serif, github.com/SorkinType/Gelasio
* Base color: `#16161D`
* EigenUI, in `themes/EiegenUI`, linked with `~/.local/share/themes/EigenUI` folder
* Eigen theme for rofi in `dotfiles/config/rofi/eigen.rasi`
* eigenui colorscheme for vim in `themes/eigenui.vim`, enable by adding `colorscheme eigenui` to `.vimrc`

## Configurations and scripts

* See configuration files in `dotfiles` folder
* Script `setup.sh` creates all symbolic links in default location (~)

## Packages / Dependencies

* Xorg, `apt-get install xorg`
* Openbox, `apt-get install openbox`
* Xterm, `apt-get install xterm`
* rofi, `apt-get install rofi`
* tmux, `apt-get install tmux`
* compton, `apt-get install compton`
* hsetroot, `apt-get install hsetroot`

## Keybindings

* Switch between workspaces: Ctrl+Alt+<arrow-left|arrow-right>
* Run terminal: Super+e
* Xterm: toogle fullscreen: Alt+Enter
* Copy-paste (outside means non-terminal)
    * Copy from outside into terminal: select a text, Ctrl+c, click middle-mouse OR shift+insert in terminal to paste
    * Copy from terminal into outside: select a text, Ctrl+v outside terminal
    * Copy from terminal into termina: select a text, click middle-mouse OR shift+insert in terminal to paste

## Development notes

* XTerm is configured in `~/.Xresources`
* Reconfigure Openbox with `openbox --reconfigure`
* Keybindings are in `dotfiles/config/openbox/rc.xml`

