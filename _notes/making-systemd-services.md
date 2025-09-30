---
layout: post
title: "Making Services on Linux (systemd)"
date: 2020-01-10
categories: notes linux
---

Sometimes you just need to make a process a daemon. This is especially useful when you want to have a game server running constantly, but don't want a `tmux` session perpetually existing. Not to mention, when reboot time comes, the server needs to be fully restarted again.

Most Linux distributions nowadays use an init program called systemd, this program is meant to start up the system and it's services. systemd does so much more but it's irrelevant here.

If you don't have systemd, you either have an older Linux distribution or you clearly know what you are doing.

We'll be using a vanilla Minecraft server as an example.

And with the intro out of the way, let's start.

# The Server Account

Before we make the game server a service, it's a good idea to separate the server out into it's own user account. You can create a new system account by using the following command line:

```bash
sudo useradd minecraft -r -m -s /sbin/nologin
```

The command above, you are creating a new user account (`useradd`) called "minecraft", which is a system account (`-r`) without a login shell (`-s /sbin/nologin`) and create a home folder for it (`-m`).

You can then copy the server executables and config files over to that user account's home folder (usually `/home/{username}`). If you need to run a shell command as that user you can use

```bash
sudo -u minecraft bash -l
cd ~
```

to log in as the server account and then change to its home folder.

Lastly it's a good idea to create a shell script which starts the server. This is useful in the case of a Minecraft server since it runs on top of Java and we can pass flags to it easily.

{% include download-card.html label='Example Minecraft Server wrapper script' type='Shell Script' link='/assets/notes/2020-01-10-making-systemd-services/start.sh' %}

Write that script of your game server executable and make it executable with

```bash
chmod 755 start.sh
./start.sh
```

Give it a test and see if it runs before we make it a server. Make sure you do most of your config now since you might not have access to the server prompt after we make it a service.

# The Unit File

systemd uses "unit files." These files describe functionality used by systemd. In this case, we're making a unit file which describes the service. Unit files are usually kept in `/etc/systemd/system`, so we'll be create a file called `minecraft-server.service` to manage the Minecraft server. Below is an example unit file:

```
[Unit]
Description=Minecraft Server
After=network.target

[Service]
Type=simple
User=minecraft
WorkingDirectory=/home/minecraft
ExecStart=/home/minecraft/start.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

The file above describes the unit called "Minecraft Server" (`Description=Minecraft Server`), which we want to load after the computer connected to a network (`After=network.target`).

This unit manages a simple service which runs as the user "minecraft" and runs the start script we made in the home folder. The server will always restarts if it's stopped without user control.

For more information you can consult the [`systemd.service`](https://manpages.debian.org/buster/systemd/systemd.service.5.en.html) man page.

## Starting the Service

To start the systemd service, you will need to run:

```bash
sudo systemctl start minecraft-server.service
```

This will continue running the server until your computer shuts down or restarts. If you want the game server to start with the computer, you will need to run:

```bash
sudo systemctl enable minecraft-server.service
```

And that's it.
