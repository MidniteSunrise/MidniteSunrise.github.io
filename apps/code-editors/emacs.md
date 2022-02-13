---
layout: app
colorspace: pink
title: Emacs
icon: "/static/icons/apps/code-editors/emacs.svg"
screenshot: "screenshot.png"
repo: "emacs"
---

#### Install

Download using the [GitHub .zip](https://github.com/Minimal-Mistakes/emacs/archive/main.zip) download option

Add the emacs theme files to ~/.emacs.d/themes.
To load a theme add the following to your init.el

```
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes")
(load-theme 'minimal-mistakes t)
```

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
git clone https://github.com/Minimal-Mistakes/emacs.git ~/.emacs.d/themes/
```

To load a theme add the following to your init.el

```
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes")
(load-theme 'minimal-mistakes t)
```

#### Activating theme

Reload emacs for the config to take affect.

# Contributors

This theme is maintained by the following person(s) Wanna help too? Check the [repository on GitHub](https://github.com/minimal-mistakes/emacs/graphs/contributors).

| [Minimal-Mistakes](https://github.com/Minimal-Mistakes)                                                            |
| ------------------------------------------------------------------------------------------------------------------ |
| [![Minimal-Mistakes](https://avatars.githubusercontent.com/u/99121492?s=125)](https://github.com/Minimal-Mistakes) |
