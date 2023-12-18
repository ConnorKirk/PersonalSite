---
title: "Using Peach Powerline on Arm Based Macs"
date: 2023-11-24T12:00:46Z
author: Connor Kirkpatrick
slug: "using-peach-powerline--on-arm-based-macs"
description: "Steps for using updating the Peach Logger drivers to work on ARM based Mac"
categories:
tags: [rowing]
---

Peach Powerline is used for analysing the Peach systems logger data. It only runs on Windows. 
It is possible to use Powerline on Mac via a virtual machine such as via Parallels. Downloading data from the logger on an ARM based Mac will not work without updating the logger drivers to use the ARM based drivers

This post documents the fun of updating the logger drivers to work on ARM based Macs (i.e. M1, M2, M3).


These are some notes from setting this up. All of these steps should be performed within the Windows VM

1. Install Parallels and a Windows VM on your mac. Install the Powerline software if you haven't already
2. Follow the instructions to uninstall the existing drivers on the Windows VM. [FTDI CDM Uninstaller](https://ftdichip.com/Support/Utilities/CDM_Uninst_GUI_Readme.html)
3. When the logger is plugged in, Parallels will ask whether to connect it to your mac or the windows VM. Choose the windows VM.
4. Download the device drivers from [FTDI Community - Windows ARM64 Driver](https://www.ftdicommunity.com/index.php?topic=753.0)
    * Extract the folder
    * Copy the directory to `C:/` on your Windows VM. It doesn't seem to matter where abouts in this drive, but leaving it at the root seems to work.
    * It should look like `C:/CDM-v2.12.36.4-for-ARM64-Signed-Distributable`
3. Update the FTDI device driver, following section 3.3 [FTDI Device Driver Installation](https://ftdichip.com/wp-content/uploads/2022/05/AN_396-FTDI-Drivers-Installation-Guide-for-Windows-10_11.pdf)
    * As the instruction state, you need to perform the driver update twice, once for each "Device"
    * If you're not sure which device to update, unplug and plug in the device whilst Device Manager is open. Look for the device that disappear and reappears. It probably will have a generic name

Things that caught me out:
* Make sure the device is "enabled" in parallels. This seems to be the equivalent of plugging/unplugging it in your virtual machine.
* Make sure the correct device is chosen in Powerline. For me it was COM3. It was no longer recognised as "Logger" inside the windows VM. It had a generic name


This is a pretty niche problem, so if this guide help you, let me know! Always good to hear from fellow rowers/coaches.
