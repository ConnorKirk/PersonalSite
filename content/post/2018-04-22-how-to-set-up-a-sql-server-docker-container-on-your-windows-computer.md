---
title: How to set up a SQL Server docker container on your windows computer
author: ''
date: '2018-04-22'
slug: how-to-set-up-a-sql-server-docker-container-on-your-windows-computer
categories: []
tags: []
---


# How to set up SQL Server Dev edition on your Windows Docker Machine (and access it from localhost!)

I recently needed to get SQL server running locally on my laptop. As an experiment, I thought I'd try using the docker image provided by Microsoft. It took a bit of figuring out, so I'd thought I'd write down the process in case anyone else is
1. Curious to try docker
2. Desperate to get SQL server up and running in less than 15 minutes.

It didn't quite work for my needs in the end, but it's certainly quicker than downloading the ISO and installing from that!


## Pre Reqs


This assumes you have Docker already installed on your machine. If you are on linux or Windows 10, then you can run Docker natively. Any other forms of Windows, you need to get the Docker-Quickstart tool. This sets up a linux VM using Virtual box that then allows you to run docker containers. It's quite good.


## Steps


1. Configure Virtual Box
    1. Change RAM - The SQL Server docker image requires a minimum of 2GB of RAM. Anything less than this provided to the VM and the container will shut down instantly when your attempt to run it. You can change this by 
        * Open up `Oracle VM Virtual Box`
        * Select `default`. This is the VM used by docker. 
        * Click `settings` Then `system`. Then set the base memory to 2048 bytes

    1. Add port forwarding. The docker container connects the SQL server port to the VM, but we need to connect the VM port to the outside machine.
        * In the settings for the `default` VM, go to `network`, then click `advanced`, then `port forwarding`.
        * Create a new rule. Leave the host and guest ip fields blank. We're using port 1401, so add 1401 to the host port and guest port fields. Call it whatever you like
        
1. Get the SQL server image

Run the commands below inside your Docker Quickstart terming. It runs a microsoft/mssql-server-linux container and passes some parameters to configure it
As you won't have the container, docker will automatically download it for you.
This creates an container named `testDev` using the latest available version of SQL server

```docker
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=gofaster123A' \
   -p 1401:1433 --name testDev \
   -d microsoft/mssql-server-linux:2017-latest
```

To check it's running, enter `docker ps -a`. This will list all of your docker containers. Look for the status of `testDev`. It should be running. If it's not, run `docker logs testDev` to find out why.

Finally, open up SSMS, or whatever tool you like and connect to `localhost,1401`. This will connect to the sql server instance running in your docker container.

To stop the container, run `docker stop testDev`.

## Useful links

Here are some of the pages that helped me get through this.

* [MS Docker Quickstart tutorial](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-linux-2017). This has a few more additional steps to follow that I've left out for brevity.

* [Forwarding ports in virtual box](https://www.howtogeek.com/122641/how-to-forward-ports-to-a-virtual-machine-and-use-it-as-a-server/)

