---
layout: page
permalink: /uses
title: Uses
subtitle: |
  A non-exhaustive list of things I use day-to-day I think is worth sharing.

  <a href="https://uses.tech/" target="_blank">Other people have posted similar pages.</a>
---

## Software

### Operating system

* **Linux**[^gnupluslinux]
  * **[Fedora]**[^ohsnap] for desktops (where things have to be stable)
  * **[Debian]**[^ohsnap] for servers (where things have to be even more stable)
  * **[Arch Linux]** for fun
* **Windows**[^windows]

[Debian]: https://debian.org/
[Fedora]: https://fedoraproject.org/
[Arch Linux]: https://archlinux.org/

I've been using Linux on-and-off since roughly 2011. I've become increasingly
familiar with the way it works over the years and decided to take the full
plunge as the daily driver on my desktop in August 2025.

[^gnupluslinux]: some people may want it to be called GNU/Linux or GNU+Linux, but I'm not into libre purism.
[^ohsnap]: used to be Ubuntu, but not a big fan of snaps.
[^windows]: now permanenly relegated to my slower, secondary SSD.


#### Desktop environment

On Linux, my go-to desktop environment is **[GNOME]**. It is a good middle
ground between the desktop-oriented environment of the 90s and 2000s and
the extreme abstraction and simplification present on mobile platforms.

Also, honourable mentions to [KDE], [XFCE], [Niri] and [i3], where I've also
spent a good amount of time.

[GNOME]: http://gnome.org/
[KDE]: http://kde.org/
[XFCE]: https://www.xfce.org/
[Niri]: https://yalter.github.io/niri/
[i3]: https://i3wm.org/


### Development

#### Editors & IDEs

* **Visual Studio Code** &mdash; the default
  * (also toying around with AI-integrated forks, like Cursor and Kiro)

* **vim** &mdash; the default (terminal) \
  Learnt it for the lols when I was ricing, and has now ended up as the default
  while I'm operating the command-line. Haven't gotten to the point where I use
  vim bindings everywhere yet.

* **IntelliJ IDEA** and friends &mdash; Java, Rails and C# projects
* **Visual Studio** &mdash; Windows C# projects
* **GNOME Builder** &mdash; Desktop Linux projects


#### SDK managers

* **Command-line utilities and toolchains**
  * [Nix](https://nixos.org/)
  * [Homebrew](https://brew.sh/) (even on Linux)

* **Ruby**: [rbenv](https://github.com/rbenv/rbenv)
* **Python**: [pyenv](https://github.com/pyenv/pyenv)
* **Node**: [volta](https://volta.sh/)


#### Game development

* [Godot](https://godotengine.org/)
* [Tiled](https://www.mapeditor.org/)


### Design

#### Graphics

* [Figma](https://www.figma.com/)
* [Aseprite](https://www.aseprite.org/)
* [Affinity Suite](https://affinity.serif.com/)


#### CAD

* [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/personal-download)
* [OpenSCAD](https://openscad.org/)


## Hardware

### Computers

<table>
  <tr>
    <th></th>
    <th><img src="{{ '/assets/logos/systems/mercur.svg' | relative_url }}" alt="" width="32" height="32"><br>Mercur (desktop)</th>
    <th><img src="{{ '/assets/logos/systems/venus.svg'  | relative_url }}" alt="" width="32" height="32"><br>Venus (laptop)</th>
  </tr>
  <tr>
    <th>Model</th>
    <td><i>(custom built)</i></td>
    <td>Lenovo ThinkPad T480</td>
  </tr>
  <tr>
    <th rowspan="2">OS</th>
    <td><a href="https://fedoraproject.org/kde/" target="_blank">Fedora Workstation KDE</a></td>
    <td rowspan="2"><a href="https://archlinux.org/" target="_blank">Arch Linux</a></td>
  </tr>
  <tr>
    <td>Windows 11</td>
  </tr>
  <tr>
    <th>CPU</th>
    <td>AMD Ryzen 7 5700X</td>
    <td>Intel Core i5-6XXX</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>64 GiB</td>
    <td>12 GiB</td>
  </tr>
  <tr>
    <th>GPU</th>
    <td>AMD Radeon RX 580</td>
    <td><i>(integrated)</i></td>
  </tr>
</table>

The desktop I have initally build in 2019 to have a solid workstation to use at
home and access while I'm at university, upgrading it over time. The guiding
principle for part choices initially was "it should run Linux well", and has
been triple-booting Windows 10, macOS and Arch Linux for most of its life.

Laptop-wise, I got a Lenovo ThinkPad because it happened to be the best for my
allocated budget when I was looking at [off-lease laptops at my local
electronics retailer](https://www.pbtech.co.nz/category/computers/exleased/laptops).

At the moment, my laptop is a glorified terminal for web services and
remote shell connections to my desktop or development virtual machine. So it
tends to run more experimental software.

Onto peripherals:

* **Keyboard:** [Logitech G512 Carbon Lightsync](https://www.pbtech.co.nz/product/KEYLOG4253602/Logitech-G512-CARBON-LIGHTSYNC-RGB-Clicky-Mechanic) &mdash; 
  I found to prefer clickier mechnical keyboards, and tend to use 102 of the 104 keys PC keyboards have had since 1995.
* **Mouse:** [Logitech MX Vertical](https://www.pbtech.co.nz/product/MSELOG4393045/Logitech-MX-Vertical-Advanced-Ergonomic-Wireless-M) &mdash;
  Most mice I've had in the past are too small for my hands, this one was the first comfortable one I've had.
* **Camera:** a crappy 1080p one I can get my hands onto early-2020.
* **Microphone:** Logitech Blue Yeti USB &mdash;
  Been told too many times I sounded as if I'm speaking into a can.
* **Displays:** 2&times; DELL P2214H (1920&times;1080 @ 60Hz) &mdash;
  1080p is all you need[^1080p]. Fairly cheap[^cheap], too.

[^1080p]: not really, a HiDPI display (4K/2160p) would be nicer. These are ex-lease, like my laptop.
[^cheap]: roughly NZ$100 each.


### Homelab

<table>
  <tr>
    <th></th>
    <th><img src="{{ '/assets/logos/systems/marte.svg' | relative_url }}" alt="" width="32" height="32"><br>Marte</th>
    <th><img src="{{ '/assets/logos/systems/ceres.svg' | relative_url }}" alt="" width="32" height="32"><br>Ceres</th>
  </tr>
  <tr>
    <th>Model</th>
    <td><i>(custom built)</i></td>
    <td>HP Proliant DL20 G9</td>
  </tr>
  <tr>
    <th>OS</th>
    <td><a href="https://www.proxmox.com/en/" target="_blank">Proxmox Virtual Environment</a></td>
    <td><i>(todo)</i></td>
  </tr>
  <tr>
    <th>CPU</th>
    <td>AMD Ryzen 5 3600</td>
    <td>Intel Xeon E3-1240 v5</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>32 GiB</td>
    <td><i>(todo)</i></td>
  </tr>
  <tr>
    <th>GPU</th>
    <td>NVIDIA GeForce GTS 450</td>
    <td></td>
  </tr>
</table>

My homelab is effectively a Proxmox datacenter. I use it to store my
personal&nbsp;data and library[^library].

Marte was built with components that had been rotated out of my desktop when
they were upgraded, with the GPU serving only as a framebuffer card.

Ceres (currently not in use) is a proper server with its only shortcoming being
having 2.5" (laptop-sized) drive bays instead of the more common 3.5". I plan
for it to be a dedicated NAS once I get an array of SSDs to use with it,
leaving Marte to be an application server.

[^library]: collection of software, games, books, and media 


## Services

Here are some services I use and get a lot of value from:

* [**Proton**](https://pr.tn/ref/5BB3E8N0QM80)[^referral] &mdash; email, cloud storage, VPN proxies
* [**Bitwarden**](https://bitwarden.com) &mdash; (mostly) open source and good value for $10/year
* [**Vultr**](https://www.vultr.com/?ref=9807211)[^referral]

[^referral]: this is a referral link.

