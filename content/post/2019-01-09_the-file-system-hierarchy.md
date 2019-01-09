---
title: "The File System Hierarchy"
date: 2019-01-09
author: Connor Kirkpatrick
slug: the-file-system-hierarchy
categories:
  - linux
tags: []
draft: true
---


[Filesystem Hierarchy Standard](http://www.pathname.com/fhs/pub/fhs-2.3.html)

[More useful info](https://www.linux.org/forums/linux-beginner-tutorials.123/)

## Root `/`
Aim to keep it as small as possible. Required to boot, restore, recover and repairs a system.


`/bin` : Essentual user command binaries available to all users
Must contain some recognisable commands, such as `cat`, `cp`, `mkdir` etc.


`/boot` : Everything required for the boot process. Contains the linux kernel. Stores data used before the kernel begins executing user-mode programs.

`/dev` : A virtual folder containing device files, allowing devices to interface with the kernel. Exists in RAM
    `/dev/null` : All data writted to this device is discarded
    `/dev/zero` : Source of zeroed data. Data written is discarded


`/boot`

`/etc` : Host specific system configuration. 
A configuration file is a local file used to control the operation of a program. It *must be static* and *cannot be an executable binary*

`/etc/opt` : Contains configuration files for opt

`/home` : User home directories

`/lib` : Contains shared libray images needed  to boot the system and run commands in the root filesystem.

`/media` : Mount point for removable media

Contains: 

`/media/floppy`  
`/media/cdrom`  
`/media/zip`




`/mnt` : Mount point for temporary mounted filesystem

`/opt` : Add on application software packages.
Programs installed to opt must locate it's static files in a seperate `/opt/<package>` or `opt/<provider>` directory.

`/tmp` : Temporary files

Programs must not assume any files or directories in `/tmp` are preserved between invocations of the program.

`/root` : Home directory of the root account.

## User

`/usr` is the scond major filesystem. Contains **Shareable**, **Readonly** data.

Contains:
`/usr/bin` - Primary directory of executable user commands
`/usr/lib` - user libraries not intended to be directly executed by the user.
`/usr/src` - Place source code for reference purposes.

`/var` Contains variable data files.
Contains:
`/var/cache` - App cache data
`/var/lib` - Variable state information
`/var/log` - Log files and directories
`/var/opt` - Variable data for `/opt`
`/var/tmp` - Temporary files preserved between system reboots
