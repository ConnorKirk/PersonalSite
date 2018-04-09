---
title: How to add your own logo to the Blogdown default theme
author: Connor Kirkpatrick
date: '2018-04-09'
tags:
  - blogdown
slug: add-your-own-logo-to-the-blogdown-default-theme
---

One thing I've been meaning to fix on this site was changing the logo from the default for the theme. In case anyone else wishes to do it, here's a simple way (but not the only).


1. Your image will need to be a `.png` file. Call it `logo.png`, which is what Hugo will be looking for.
2. Create an `images` folder in the directory `<your website project>/static`.
3. Place your new image, `logo.png` inside the new directory `<your website project>/static/images`.
4. Run `blogdown::serve_site()` to view the new logo!