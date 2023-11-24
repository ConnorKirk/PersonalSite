---
title: "Using Peach Powerline on Arm Based Macs"
date: 2023-11-24T12:00:46Z
author: Connor Kirkpatrick
slug: "2023-11-24_using-peach-powerline--on-arm-based-macs"
categories:
tags: [rowing]
---

Peach Powerline is used for analysing the logger data. It runs on Windows.
It is possible to use it on Mac via a virtual machine such as via Parallels

It is also possible to run on newer M1/M2 Macs. These are some notes from setting this up.

1. Install Parallels and a Windows VM
2. When the logger is plugged in, Parallels will ask whether to connect it to your mac or the windows VM. Choose the windows VM.
3. Download the device drivers from [FTDI Community - Windows ARM64 Driver](https://www.ftdicommunity.com/index.php?topic=753.0)
  * Unzip the folder
  * Copy the directory to `C:/` on your Windows VM. It doesn't seem to matter where abouts in this drive, but leaving it at the root seems to work.
  * It should look like `C:/CDM-v2.12.36.4-for-ARM64-Signed-Distributable`
3. Update the FTDI device driver, following section 3.3 [FTDI Device Driver Installation](https://ftdichip.com/wp-content/uploads/2022/05/AN_396-FTDI-Drivers-Installation-Guide-for-Windows-10_11.pdf)
  * As the instruction state, you need to perform the driver update twice, once for each "Device"
  * If you're not sure which device to update, unplug and plug in the device whilst Device Manager is open. Look for the device that disappear and reappears. It probably will have a generic name

Things that caught me out
* Make sure the device is "enabled" in parallels. This seems to be the equivalent of plugging/unplugging it in your virtual machine.
* Make sure the correct device is chosen. For me it was COM3. It was no longer recognised as "Logger" inside the windows VM. It had a generic name

