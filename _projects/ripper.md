---
title: Ripper
description: Appliance for Ripping CDs and DVDs
layout: project
platforms:
  - WIP
  - Embedded
  - Linux
  - CAD
links:
  - label: Docs & Software
    url: https://ripper.razza.io/
  - label: RipperWare
    url: https://github.com/itisrazza/ripperware
---

> Ripper is still a work in progress. Follow this page for updates.

# Background

Earlier in 2024, I've bought a few CDs and DVDs I've spotted while op-shopping and put them in the "take a look and rip them later" pile. Later eventually arrived and came to the realisation that none of my computers I have at my house have a disc drive anymore.

I could've gone ahead and buy an [external DVD drive](https://www.pbtech.co.nz/category/components/optical-drives/external-cd-dvd-drives) like a normal person, but I wanted to get started into learning electronics and making hardware things with my recently gotten working 3D printer, and an excuse to learn to use [Autodesk Fusion](https://www.autodesk.com/products/fusion-360/personal).

Plus, I had another "first hardware project" fall through, and I thought it would be a good idea to scale back and try something simpler.

# Todo List

Here's the current things left to do:

- [ ] Print out, revise the chassis
- [ ] Install electronics in chassis
- [ ] Write OTA update mechanism for software
- [ ] Write bootstrap script for software
- [ ] [Write the software](https://github.com/itisrazza/ripperware?tab=readme-ov-file#wishlist)

# Architecture

![](/assets/images/ripper/block-diagram.svg)

The architecture is pretty much as simple as it gets. The Raspberry Pi is connected to a powered USB hub, which is then connected to a DVD drive through an appropiate adaptor cable. 

# Software

> The software is currently work in process. Development will continue after hardware is finalised.

The Raspberry Pi runs a copy of Raspbian that is further stripped down the bare essentials to only run RipperWare and associated tools. The code and tooling for RipperWare is [made available on GitHub](https://github.com/itisrazza/ripperware).

It uses existing command-line tools for ripping and burning discs, like `dd` and `cdparanoia`. They get presented to the user in a simple user interface ([Figma](https://www.figma.com/file/rQMEi3B5xcG4fZtYeFRtGd/CD-Ripper?type=design&node-id=3%3A605&mode=design&t=RB5gA1mGlGouYIkc-1)) using [Pygame](https://www.pygame.org).

I will image the SD card and upload it here to download later down the road when it stabilises.

# Chassis

> The chassis is currently very much a work in progress.
>
> This section with be updated as I work on it.

# Bill of Materials

Here's a list of thing I had to go bought and ended up in the project.

| Thing                                                                                                                 | Cost                            | Notes                    |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------ |
| [Raspberry Pi Zero W](https://www.pbtech.co.nz/product/SEVRBP0412/Raspberry-Pi-Zero-W-1GHz-BCM2835-Single-Core-CPU-5) | <span class="num">$31.89</span> |                          |
| [64GB SD Card](https://www.pbtech.co.nz/product/MEMSAM11023/Samsung-EVO-PLUS-64GB-Micro-SD-with-Adapter---up-t)       | <span class="num">$9.99</span>  |                          |
| [GPIO Header](https://www.aliexpress.com/item/1005001470059567.html)                                                  | <span class="num">$2.19</span>  |                          |
| [Laptop DVD Drive](https://www.lg.com/us/burners-drives/lg-gub0n-ultra-slim-internal-dvd-drive)                       | <span class="num">$0.00</span>  | salvaged from old laptop |
| [SATA-ODD to USB Cable](https://www.aliexpress.com/item/1005006416083859.html)                                        | <span class="num">$5.64</span>  |                          |
| [USB Hub (microUSB OTG)](https://www.aliexpress.com/item/32880457922.html)                                            | <span class="num">$5.88</span>  |                          |
| [Waveshare 4' Display](https://www.waveshare.com/4inch-rpi-lcd-a.htm)                                                 | <span class="num">$41.99</span> |                          |
| **Total**                                                                                                             | <b class="num">$97.58</b>       |                          |

(prices listed are in NZD)

<style>
.num {
  display: block;
  text-align: right;
}
</style>

