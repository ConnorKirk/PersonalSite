---
title: "Introduction to Helix"
date: 2022-12-17
author: Connor Kirkpatrick
slug: introduction-to-helix
tags: []
---

# Introduction to Helix

I once spent a few weeks trying to use Vim. I liked the principle of navigating and editing texts with commands.
I gave up eventually as the amount of plugins and configuration for the experience I wanted was too high.
It was easier to just go back to VSCode.

This post has a few tips on things I've figured out whilst trying out Helix.

* Use `hx --health` to check if you have the required language server,  
  * or `hx --health rust` to check rust specifically
  * Check you've got the required language server and other tools installed.
* Use `<space>` to open the space menu
  * Use `<space> <f>` to open the file picker
* Use `"` to see what's in your registers
* Configure `jj` to escape insert mode
* Use `hx --tutor` for the tutor file.
* Use `xd` to delete a line
* `Alt` is option key on mac, but you probably need to update your terminal. See [gh issue)[https://github.com/helix-editor/helix/issues/2280] for a solution.

