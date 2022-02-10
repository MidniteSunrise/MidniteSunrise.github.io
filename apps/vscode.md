---
layout: app
colorspace: pink
title: Visual Studio Code
description: "Dark theme for {{ page.title | escape }} <a href="/">and other apps.</a>!
icon: "/assets/images/candies.png"
screenshot: "/assets/images/candies.png"
repo: "visual-studio-code"
---

#### Install using Command Palette

1. Go to View -> Command Palette or press Ctrl+Shift+P
2. Then enter Install Extension
3. Write Dracula Official
4. Select it or press Enter to install

#### Install using Git

If you are a git user, you can install the theme and keep up to date by cloning the repo:

```
git clone https://github.com/Minimal-Mistakes/visual-studio-code.git ~/.vscode/extensions/theme-minimal-mistakes
cd ~/.vscode/extensions/theme-minimal-mistakes
npm install
npm run build
```

#### Activating theme

Run Visual Studio Code. The Minimal-Mistakes Syntax Theme will be available from `File -> Preferences -> Color` Theme dropdown menu.