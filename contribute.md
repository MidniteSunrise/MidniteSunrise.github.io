---
layout: default
colorspace: orange
---

## Install

All instructions can be found at [minimal-mistakes.xyz](https://minimal-mistakes.xyz/).

## FAQ

###### "Are you going to create a light color scheme?"

Nope. Minimal-Mistakes can't stand the light.

###### "Are you going to support editor X?"

We hope so, but we need your help to accomplish that. Since you're already using app X you're probably much more experienced on it than us. So give it a try first!

###### "How do I submit a new theme?"

1. Create a new repository based on this [template](https://github.com/minimal-mistakes/template).
2. Build the new theme using the [Color Palette](#color-palette) above.
3. Finally, [submit an issue](https://github.com/minimal-mistakes/theme/issues/new) with a link to your repository. Once the theme is accepted, we will move the repository under the Minimal-Mistakes organization and give you rights to maintain it :)

## Color Palette

<div class="dropdown">
  <button onclick="selectPalette()" class="palette"><span id="selectedPalette">Hex</span> <span class="right"><i class="fa-solid fa-caret-down"></i></span></button>
  <div id="myPalette" class="dropdown-content">
    <a href="javascript:void(0);" onclick="selectHEX()" id="selectHEX">HEX</a>
    <a href="javascript:void(0);" onclick="selectRGB()" id="selectRGB">RGB</a>
    <a href="javascript:void(0);" onclick="selectHSL()" id="selectHSL">HSL</a>
    <a href="javascript:void(0);" onclick="selectCMYK()" id="selectCMYK">CMYK</a>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>Palette</th>
      <th id="hex" class="hex">Hex</th>
      <th id="rgb" class="rgb hide">RGB</th>
      <th id="hsl" class="hsl hide">HSL</th>
      <th id="cmyk" class="cmyk hide">CMYK</th>
      <th>Color Picker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Background</td>
      <td id="hex" class="hex">#283036</td>
      <td id="rgb" class="rgb hide">rgb(40,48,54)</td>
      <td id="hsl" class="hsl hide">hsl(205.7,14.9%,18.4%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(26,11,0,79)</td>
      <td><input type="color" disabled value="#283036"></td>
    </tr>
    <tr>
      <td>Current Line</td>
      <td id="hex" class="hex">#434c5e</td>
      <td id="rgb" class="rgb hide">rgb(67,76,94)</td>
      <td id="hsl" class="hsl hide">hsl(220,16.8%,31.6%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(29,19,0,63)</td>
      <td><input type="color" disabled value="#434c5e"></td>
    </tr>
    <tr>
      <td>Selection</td>
      <td id="hex" class="hex">#434c5e</td>
      <td id="rgb" class="rgb hide">rgb(67,76,94)</td>
      <td id="hsl" class="hsl hide">hsl(220,16.8%,31.6%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(29,19,0,63)</td>
      <td><input type="color" disabled value="#434c5e"></td>
    </tr>
    <tr>
      <td>Foreground</td>
      <td id="hex" class="hex">#e5e9f0</td>
      <td id="rgb" class="rgb hide">rgb(229,233,240)</td>
      <td id="hsl" class="hsl hide">hsl(218.2,26.8%,92%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(5,3,0,6)</td>
      <td><input type="color" disabled value="#e5e9f0"></td>
    </tr>
    <tr>
      <td>Comment</td>
      <td id="hex" class="hex">#81a1c1</td>
      <td id="rgb" class="rgb hide">rgb(129,161,193)</td>
      <td id="hsl" class="hsl hide">hsl(210,34%,63.1%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(33,17,0,24)</td>
      <td><input type="color" disabled value="#81a1c1"></td>
    </tr>
    <tr>
      <td>Cyan</td>
      <td id="hex" class="hex">#88c0d0</td>
      <td id="rgb" class="rgb hide">rgb(136,192,208)</td>
      <td id="hsl" class="hsl hide">hsl(193.3,43.4%,67.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(35,8,0,18)</td>
      <td><input type="color" disabled value="#88c0d0"></td>
    </tr>
    <tr>
      <td>Green</td>
      <td id="hex" class="hex">#a3be8c</td>
      <td id="rgb" class="rgb hide">rgb(163,190,140)</td>
      <td id="hsl" class="hsl hide">hsl(92.4,27.8%,64.7%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(14,0,26,25)</td>
      <td><input type="color" disabled value="#a3be8c"></td>
    </tr>
    <tr>
      <td>Orange</td>
      <td id="hex" class="hex">#d08770</td>
      <td id="rgb" class="rgb hide">rgb(208,135,112)</td>
      <td id="hsl" class="hsl hide">hsl(14.4,50.5%,62.7%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,35,46,18)</td>
      <td><input type="color" disabled value="#d08770"></td>
    </tr>
    <tr>
      <td>Pink</td>
      <td id="hex" class="hex">#b48ead</td>
      <td id="rgb" class="rgb hide">rgb(180,142,173)</td>
      <td id="hsl" class="hsl hide">hsl(311.1,20.2%,63.1%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,21,4,29)</td>
      <td><input type="color" disabled value="#b48ead"></td>
    </tr>
    <tr>
      <td>Purple</td>
      <td id="hex" class="hex">#765eac</td>
      <td id="rgb" class="rgb hide">rgb(118,94,172)</td>
      <td id="hsl" class="hsl hide">hsl(258.5,32%,52.2%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(31,45,0,33)</td>
      <td><input type="color" disabled value="#765eac"></td>
    </tr>
    <tr>
      <td>Red</td>
      <td id="hex" class="hex">#bf616a</td>
      <td id="rgb" class="rgb hide">rgb(191,97,106)</td>
      <td id="hsl" class="hsl hide">hsl(354.3,42.3%,56.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,49,45,25)</td>
      <td><input type="color" disabled value="#bf616a"></td>
    </tr>
    <tr>
      <td>Yellow</td>
      <td id="hex" class="hex">#ebcb8b</td>
      <td id="rgb" class="rgb hide">rgb(235,203,139)</td>
      <td id="hsl" class="hsl hide">hsl(40,70.6%,73.3%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,14,41,8)</td>
      <td><input type="color" disabled value="#ebcb8b"></td>
    </tr>
    <tr>
      <td>Cyan_Bright</td>
      <td id="hex" class="hex">#a6fffc</td>
      <td id="rgb" class="rgb hide">rgb(166,255,252)</td>
      <td id="hsl" class="hsl hide">hsl(178,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(35,0,1,0)</td>
      <td><input type="color" disabled value="#a6fffc"></td>
    </tr>
    <tr>
      <td>Green_Bright</td>
      <td id="hex" class="hex">#a6ffa6</td>
      <td id="rgb" class="rgb hide">rgb(166,255,166)</td>
      <td id="hsl" class="hsl hide">hsl(120,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(35,0,35,0)</td>
      <td><input type="color" disabled value="#a6ffa6"></td>
    </tr>
    <tr>
      <td>Orange_Bright</td>
      <td id="hex" class="hex">#ffc9a6</td>
      <td id="rgb" class="rgb hide">rgb(255,201,166)</td>
      <td id="hsl" class="hsl hide">hsl(23.6,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,21,35,0)</td>
      <td><input type="color" disabled value="#ffc9a6"></td>
    </tr>
    <tr>
      <td>Pink_Bright</td>
      <td id="hex" class="hex">#ffa6fc</td>
      <td id="rgb" class="rgb hide">rgb(255,166,252)</td>
      <td id="hsl" class="hsl hide">hsl(302,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,35,1,0)</td>
      <td><input type="color" disabled value="#ffa6fc"></td>
    </tr>
    <tr>
      <td>Purple_Bright</td>
      <td id="hex" class="hex">#c5a6ff</td>
      <td id="rgb" class="rgb hide">rgb(197,166,255)</td>
      <td id="hsl" class="hsl hide">hsl(260.9,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(23,35,0,0)</td>
      <td><input type="color" disabled value="#c5a6ff"></td>
    </tr>
    <tr>
      <td>Red_Bright</td>
      <td id="hex" class="hex">#ffa6a6</td>
      <td id="rgb" class="rgb hide">rgb(255,166,166)</td>
      <td id="hsl" class="hsl hide">hsl(0,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,35,35,0)</td>
      <td><input type="color" disabled value="#ffa6a6"></td>
    </tr>
    <tr>
      <td>Yellow_Bright</td>
      <td id="hex" class="hex">#ffffa6</td>
      <td id="rgb" class="rgb hide">rgb(255,255,166)</td>
      <td id="hsl" class="hsl hide">hsl(60,100%,82.5%)</td>
      <td id="cmyk" class="cmyk hide">cmyk(0,0,35,0)</td>
      <td><input type="color" disabled value="#ffffa6"></td>
    </tr>
  </tbody>
</table>

For more details about how to apply these different colors to represent different code symbols, please see the [Minimal-Mistakes Specification](https://minimal-mistakes.xyz/specs).
