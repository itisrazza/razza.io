---
layout: page
permalink: /uses
nav_tag: about

title: Uses
subtitle: |
  A non-exhaustive list of things I use day-to-day I think is worth sharing.

  <a href="https://uses.tech/" target="_blank">Other people have posted similar pages.</a>
---

## Software

### Operating system

* **macOS**
* **Linux**[^gnupluslinux]
  * **[Arch Linux]** for high-contact devices (desktop & laptop VMs)
  * **[Debian]** for servers (where things have to be stable)
* **Windows**

[Debian]: https://debian.org/
[Fedora]: https://fedoraproject.org/
[Arch Linux]: https://archlinux.org/

macOS is my primary daily-driver. It's a nice middle ground between the UNIX
machinery I've gotten used to on Linux, and the wide software support Windows
has.

I've also been using Linux on-and-off since roughly 2011. I've become increasingly
familiar with the way it works over the years and decided to take the full
plunge as the daily driver on my desktop in August 2025. Haven't had any issues
so far.
 
Windows is well... Windows. It's been getting worse to use from 2022 onwards,
so it only gets booted up a couple times per month at most.

[^gnupluslinux]: some people may want it to be called GNU/Linux or GNU+Linux, but I'm not into the libre purism schtick.

#### Linux desktop environment

When I need to use my desktop (Linux), my go-to desktop environment is
[KDE]. It retains the desktop metaphor and way of working I had become
accustomed to ever since I started using computers, and everything tends to be
fairly well integrated.

Also, honourable mentions to [GNOME], [XFCE], [Niri] and [i3], where I've also
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
* **Xcode** &mdash; macOS/iOS projects


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
    <th><img src="{{ '/assets/logos/systems/pamant.svg' | relative_url }}" alt="" width="32" height="32"><br>Pământ (laptop)</th>
  </tr>
  <tr>
    <th>Model</th>
    <td><i>(custom built)</i></td>
    <td>MacBook Pro</td>
  </tr>
  <tr>
    <th rowspan="2">OS</th>
    <td><a href="https://archlinux.org/" target="_blank">Arch Linux</a></td>
    <td rowspan="2">macOS</td>
  </tr>
  <tr>
    <td>Windows 11</td>
  </tr>
  <tr>
    <th>CPU</th>
    <td>AMD Ryzen 7 5700X</td>
    <td>Apple M4 Pro</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>64 GiB</td>
    <td>24 GiB</td>
  </tr>
  <tr>
    <th>GPU</th>
    <td>AMD Radeon RX 7800 XT</td>
    <td><i>(integrated)</i></td>
  </tr>
</table>

I initially built the desktop in 2019 to have a solid workstation to use at
home and access while I'm at uni, upgrading it over time. The guiding
principle for part choices initially was "it should run Linux well", and has
been triple-booting Windows 10, macOS[^hackintosh] and Arch Linux for most of its life.

Laptop-wise, I've sprung for a last-gen MacBook Pro. They're quite honestly the
best laptops on the market[^laptopgood], as my needs for a laptop have outgrown
my previous set up.

[^hackintosh]: man... the Hackintosh days...
[^laptopgood]: as of May 2026, in my opinion

Previously, I used a Lenovo ThinkPad. If you don't need a lot of performance,
and have given yourself a tight budget, it's worth squeezing the life out of an
old business laptop, with a screwdriver, some patience and a few spare parts on
hand.

I've stopped using Windows for the most part. There is still the occasional
need to boot it up for games that require spyware[^anticheat], or to work on
CAD models my laptop won't run[^myfault].

[^anticheat]: also known as "kernel anti-cheat"
[^myfault]: my fault, probably. I'm an amateur when it comes to 3D modelling. 

Onto peripherals:

* **Keyboard:** [Logitech G512 Carbon Lightsync](https://www.pbtech.co.nz/product/KEYLOG4253602/Logitech-G512-CARBON-LIGHTSYNC-RGB-Clicky-Mechanic) &mdash;
  I found to prefer clickier mechanical keyboards, and tend to use 102 of the 104 keys PC keyboards have had since 1995.
* **Mouse:** [Logitech MX Vertical](https://www.pbtech.co.nz/product/MSELOG4393045/Logitech-MX-Vertical-Advanced-Ergonomic-Wireless-M) &mdash;
  Most mice I've had in the past are too small for my hands, this one was the first comfortable one I've had.
* **Camera:** a crappy 1080p one I got my hands on in early 2020.
* **Microphone:** Logitech Blue Yeti USB &mdash;
  Been told too many times I sounded as if I'm speaking into a can.
* **Displays:** 2&times; DELL P2214H (1920&times;1080 @ 60Hz) &mdash;
  1080p is all you need[^1080p]. Fairly cheap[^cheap], too.

[^1080p]: not really, a HiDPI display (4K/2160p) would be nicer. These are ex-lease.
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
    <td>Debian</td>
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
    <td>AMD Radeon RX 580</td>
    <td></td>
  </tr>
</table>

I'm working on building out my homelab to store personal&nbsp;data and library[^library],
and plan to also add capabilities for running development tools remotely, play
around with cloud tooling, and just toying around with networking.

Marte was built with components that had been rotated out of my desktop when
they were upgraded, with the GPU used for video transcoding and AI inference
tasks.

Ceres (currently not in use) is a proper server with its only shortcoming being
having 2.5" (laptop-sized) drive bays instead of the more common 3.5". I plan
for it to be a dedicated NAS once I get an array of SSDs to use with it,
leaving Marte to be an application server.

[^library]: collection of software, games, books, and media


## Services

Here are some services I use and get a lot of value from:

* [**Proton**](https://pr.tn/ref/5BB3E8N0QM80)[^referral] &mdash; email, cloud storage, VPN proxies
* [**Bitwarden**](https://bitwarden.com) &mdash; (mostly) open source and good value for $10/year
* [**Vultr**](https://www.vultr.com/?ref=9807211)[^referral] &mdash; web hosting

[^referral]: this is a referral link.
