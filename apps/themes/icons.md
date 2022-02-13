---
layout: app
colorspace: pink
title: Icons
icon: "/static/icons/apps/themes/icons.svg"
screenshot: "screenshot.png"
repo: "Icons"
---

#### Install manually

Download using the [GitHub .zip download](https://github.com/minimal-mistakes/icons/archive/main.zip) option and extract the `.zip` file to the icons directory i.e. `/usr/share/icons/minimal-mistakes` or `~/.icons/minimal-mistakes` (create it if necessary).

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
git clone https://github.com/Minimal-Mistakes/icons.git ~/.cache/icons/
cp ~/.cache/icons/Gnome-Minimal-Mistakes ~/.icons/Gnome-Minimal-Mistakes
cp ~/.cache/icons/Numix-Minimal-Mistakes ~/.icons/Numix-Minimal-Mistakes
cp ~/.cache/icons/Papirus-Minimal-Mistakes ~/.icons/Papirus-Minimal-Mistakes
```

#### Activating icon theme

To activate the theme in Gnome, run the following commands in Terminal:

```
gsettings set org.gnome.desktop.interface icon-theme "Minimal-Mistakes"
```

or Change via distribution specific tweak tool.

## GTK Theme (optional)

#### Install manually

Download using the [GitHub .zip download](https://github.com/minimal-mistakes/gtk/archive/main.zip) option and extract the `.zip` file to the themes directory i.e. `/usr/share/themes/minimal-mistakes` or `~/.themes/minimal-mistakes` (create it if necessary).

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
git clone https://github.com/Minimal-Mistakes/gtk.git ~/.themes/minimal-mistakes/
```

#### Activating theme

To activate the theme in Gnome, run the following commands in Terminal:

```
gsettings set org.gnome.desktop.interface gtk-theme "Minimal-Mistakes"
gsettings set org.gnome.desktop.wm.preferences theme "Minimal-Mistakes"
```

or Change via distribution specific tweak tool.

## QT Theme (optional)

#### Install manually

Download using the [GitHub .zip download](https://github.com/minimal-mistakes/qt/archive/main.zip) option and extract the `.zip` file to the themes directory i.e. `~/.config/qt5ct/minimal-mistakes` and `~/.config/qt6ct/minimal-mistakes` (create it if necessary).

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
git clone https://github.com/Minimal-Mistakes/gtk.git ~/.cache/qt-themes/
cp ~/.cache/qt-themes/qt5/ ~/.config/qt5ct/minimal-mistakes
cp ~/.cache/qt-themes/qt6/ ~/.config/qt6ct/minimal-mistakes
```

#### Activating theme

Change via distribution specific tweak tool i.e `qt5ct` or `qt6ct`.

# Contributors

This theme is maintained by the following person(s) Wanna help too? Check the [repository on GitHub](https://github.com/minimal-mistakes/icons/graphs/contributors).

| [Minimal-Mistakes](https://github.com/Minimal-Mistakes)                                                            |
| ------------------------------------------------------------------------------------------------------------------ |
| [![Minimal-Mistakes](https://avatars.githubusercontent.com/u/99121492?s=125)](https://github.com/Minimal-Mistakes) |
