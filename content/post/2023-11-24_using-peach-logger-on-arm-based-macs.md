---
title: "Using Peach Powerline on Arm Based Macs"
date: 2023-11-24T12:00:46Z
author: Connor Kirkpatrick
slug: "2023-11-24_using-peach-powerline--on-arm-based-macs"
categories:
tags: [rowing]
---

Peach Powerline is used for analysing the logger data. It runs on Windows
It is possible to use it on Mac via a virtual machine such as via Parallels

It is also possible to run on newer M1/M2 Macs. These are some notes from setting this up.

1. Install Parallels and a Windows VM
2. Update the FTDI device driver, following section 3.3


Things that caught me out
* Make sure the device is "enabled" in parallels. This seems to be the equivalent of plugging/unplugging it in your virtual machine.
* Make sure the correct device is chosen. For me it was COM3. It was no longer recognised as "Logger" inside the windows VM. It had a generic name

