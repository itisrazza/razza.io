---
title: "Making Services on Linux (systemd)"
date: 2020-01-10
resources:
  - id: start-sh
    label: Example wrapper script
    url: /assets/notes/2020-01-10-making-systemd-services/start.sh
    type: Shell Script
    icon: filetype-sh
  - id: minecraft-server-service
    label: Example unit file
    url: /assets/notes/2020-01-10-making-systemd-services/minecraft.service
    type: systemd Unit File
    icon: file-earmark-code
  - id: systemd-service-manpage
    label: systemd.service(5)
    url: https://manpages.debian.org/buster/systemd/systemd.service.5.en.html
    type: Man Page
    icon: book-half
---

<div class="callout callout-migrated" markdown="1">
<i class="bi bi-clock-history"></i> Originally published on [Notion](https://www.notion.so/razza/Making-Services-on-Linux-systemd-b612d8e1e0a54386adb7b975204ba5a8).

This article is the one originally posted with a few markup changes, spelling and grammatical fixes.
</div>

Sometimes you just need to make a process a daemon. This is especially useful when you want to have a game server running constantly, but don't want a `tmux` session perpetually existing. Not to mention, when reboot time comes, the server needs to be fully restarted again.

Most Linux distributions nowadays use an init program called systemd, this program is meant to start up the system and its services. systemd does so much more but it's irrelevant here.

If you don't have systemd, you either have an older Linux distribution or you clearly know what you are doing.

We'll be using a vanilla Minecraft server as an example.

And with the intro out of the way, let's start.

# The Service Account

Before we make the game server a service, it's a good idea to separate the server out into its own user account. You can create a new system account by using the following command line:

```bash
sudo useradd minecraft -r -m -s /sbin/nologin
```

The command above creates a new user account (`useradd`) called "minecraft", which is a system account (`-r`) without a login shell (`-s /sbin/nologin`) and a home folder (`-m`).

You can then copy the server executables and config files over to that user account's home folder (usually `/home/{username}`). To run commands as that user, log in as the service account and navigate to its home folder:

```bash
sudo -u minecraft bash -l
cd ~
```

Lastly it's a good idea to create a shell script which starts the server. This is useful in the case of a Minecraft server since it runs on top of Java and we can pass flags to it easily.

{% include resource-collapsible.html id="start-sh" %}
<div class="collapsible-body collapsible-body-flush" markdown="1">
```sh
#!/bin/sh
java -Xmx1024M -Xms1024M -jar server.jar nogui
```
</div>
</details>

Write a script with the arguments your game server needs and make it executable with

```bash
chmod 755 start.sh
./start.sh
```

Give it a test and see if it runs before we make it a server. Make sure you do most of your config now since you might not have access to the server prompt after we make it a service.

# The Unit File

systemd uses "unit files" to describe services. Unit files are kept in `/etc/systemd/system` — we'll be creating `minecraft.service`:

{% include resource-collapsible.html id="minecraft-server-service" %}
<div class="collapsible-body collapsible-body-flush" markdown="1">
```ini
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
</div>
</details>

The file above describes a unit called "Minecraft Server" (`Description=Minecraft Server`), which loads after the computer connects to a network (`After=network.target`).

This unit manages a simple service which runs as the user "minecraft" and runs the start script we made in the home folder. The server will always restart if it's stopped without user control.

For more information you can consult the {% include resource-chip.html id="systemd-service-manpage" %} man page.

## Starting the Service

To start the systemd service, you will need to run:

```bash
sudo systemctl start minecraft.service
```

This will continue running the server until your computer shuts down or restarts. If you want the game server to start with the computer, you will need to run:

```bash
sudo systemctl enable minecraft.service
```

And that's it.
