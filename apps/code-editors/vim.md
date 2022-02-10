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

These are the default instructions using Vim 'packages' feature. See sections below, if you use other plugin managers.

Create theme folder (in case you don't have yet):

```
mkdir -p ~/.vim/pack/themes/start
```

Navigate to the folder above:

```
cd ~/.vim/pack/themes/start/
```

Clone the repository using the "Minimal-Mistakes" name:

```
git clone https://github.com/Minimal-Mistakes/vim.git Minimal-Mistakes
```

Edit your `vimrc` or `init.vim` file with the following content:

```
packadd! Minimal-Mistakes
syntax enable
colorscheme minimal-mistakes
```

The location of the `vim` config varies between platforms:

vim `~/.vim/vimrc` or `~/.vimrc`

neovim `~/.config/nvim/init.vim`

#### Install using plugin managers

If you use vim + pathogen + submodules:

Navigate to your vim directory (`~/.vim` or `~/.config/nvim/`)

```
git submodule add git@github.com:Minimal-Mistakes/vim.git bundle/Minimal-Mistakes
```

Place `colorscheme minimal-mistakes` after `execute pathogen#infect()`.

If you use vim + vundle:

```
Plugin 'Minimal-Mistakes/vim', { 'name': 'minimal-mistakes' }
:PluginInstall
```

Place `colorscheme minimal-mistakes` after `call vundle#end()`.

If you use vim-plug ('as' will install the plugin in a directory called 'dracula' instead of just 'vim'):

```
Plug 'dracula/vim', { 'as': 'dracula' }
:PlugInstall
```

Place `colorscheme minimal-mistakes` after `call plug#end()`.

If you use packer:

```
use {
    "Minimal-Mistakes/vim",
}
:PackerSync
```

Place `colorscheme minimal-mistakes` anywhere in the config.
