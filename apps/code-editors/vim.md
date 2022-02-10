---
layout: app
colorspace: pink
title: Vim
icon: "/static/icons/apps/code-editors/vim.svg"
screenshot: "screenshot.png"
repo: "vim"
---

#### Install

Download using the [GitHub .zip](https://github.com/Minimal-Mistakes/vim/archive/master.zip) download option

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

These are the default instructions using Vim 8's |packages| feature. See sections below, if you use other plugin managers.

- Create theme folder (in case you don't have yet):

```
mkdir -p ~/.vim/pack/themes/start
```

- Navigate to the folder above:

```
cd ~/.vim/pack/themes/start/
```

- Clone the repository using the "Minimal-Mistakes" name:

```
git clone https://github.com/Minimal-Mistakes/vim.git Minimal-Mistakes
```

- Edit your `vimrc` or `init.vim` file with the following content:

```
packadd! Minimal-Mistakes
syntax enable
colorscheme Minimal-Mistakes
```

The location of the `vim` config varies between platforms:

- vim `~/.vim/vimrc` or `~/.vimrc`
- neovim `~/.config/nvim/init.vim`

#### Activating theme

Run Visual Studio Code. The Minimal-Mistakes Syntax Theme will be available from `File -> Preferences -> Color` Theme dropdown menu.
