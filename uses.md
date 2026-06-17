---
layout: chrome
permalink: /uses
nav_tag: about

title: Uses
subtitle: |
  A non-exhaustive list of things I use day-to-day that I think are worth sharing.

  <a href="https://uses.tech/" target="_blank">Other people have posted similar pages.</a>

  <span style="display:block;margin-top:0.5rem;font-size:0.875rem;color:var(--colour-foreground-secondary)">Last updated: June 17, 2026</span>
---

{% include header.html %}

<article markdown="1">

## Software
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Zen" description="A much nicer way to browse the World Wide Web" url="https://zen-browser.app/" logo="/assets/logos/brands/zen.svg" %}
{% include card-tile.html title="Chrome" description="For when Zen/Firefox isn't supported" url="https://www.google.com/chrome/" logo="/assets/logos/brands/chrome.svg" %}
{% include card-tile.html title="LibreOffice" description="For when I get handed an MS Office document" url="https://www.libreoffice.org/" logo="/assets/logos/brands/libreoffice.svg" %}
{% include card-tile.html title="Notion" description="For personal notes and databases" url="https://www.notion.so/" logo="/assets/logos/brands/notion.svg" %}
{% include card-tile.html title="Cyberduck" description="For remote file access" badge="macOS" url="https://cyberduck.io/" logo="/assets/logos/brands/cyberduck.png" %}
{% include card-tile.html title="Amphetamine" description="Keeps laptop awake" badge="macOS" url="https://apps.apple.com/app/amphetamine/id937984704" logo="/assets/logos/brands/amphetamine.png" %}
{% include card-tile.html title="Secretive" description="Secure Enclave-powered SSH keys" badge="macOS" url="https://github.com/maxgoedjen/secretive" logo="/assets/logos/brands/secretive.png" %}
{% include card-tile.html title="Grand Perspective" description="WinDirStat but for Mac" url="https://grandperspectiv.sourceforge.net/" logo="/assets/logos/brands/grand-perspective.png" badge="macOS" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

**Zen** is basically a port of [Arc]'s UX to Firefox. I find its navigation and
space system much easier to deal with than the usual browser format.

**Chrome** &mdash; The reality is that most web users are on Chromium-based
browsers, so I still need to use one for when sites and applications are not
supported, as well as for testing my own work.

[Arc]: https://arc.net/

**LibreOffice** &mdash; I have a bit of a distaste for most office software
(including this one). But so long as Microsoft Office-formatted documents still
exist in the wild, I still need to have a way to read them.

**Notion** &mdash; It's ridiculously flexible. I don't squeeze it for every
productivity improvement there is, but it's really nice to have a place holding
my databases with flexible fields and what-not.

**Cyberduck** &mdash; Good way to access files remotely. GNOME&nbsp;(GVFS) and
KDE&nbsp;(KIO) have pretty good remote file system support, but this handles it
for me when I'm on Windows or macOS.

**Secretive** &mdash; Instead of typing in a password you may or may not have
forgotten, this lets you use Touch ID to unlock your SSH keys. This was one of
the "pros" to switching to a Mac.

</div>
</details>

## Command-line
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Ghostty" description="Fast, no-nonsense terminal emulator" url="https://ghostty.org/" logo="/assets/logos/brands/ghostty.png" %}
{% include card-tile.html title="zsh" description="Extended Bourne-compatible shell" url="https://www.zsh.org/" logo="/assets/logos/brands/zsh.svg" %}
{% include card-tile.html title="oh-my-zsh" description="Make zsh nicer to deal with" url="https://ohmyz.sh/" logo="/assets/logos/brands/oh-my-zsh.png" %}
{% include card-tile.html title="vim" description="Go-to text editor in terminals" url="https://www.vim.org/" logo="/assets/logos/brands/vim.svg" %}
{% include card-tile.html title="bat" description="less with syntax highlighting" url="https://github.com/sharkdp/bat" logo="/assets/logos/brands/bat.svg" %}
{% include card-tile.html title="tmux" description="Terminal emulator inception" url="https://github.com/tmux/tmux" logo="/assets/logos/brands/tmux.svg" %}
{% include card-tile.html title="htop" description="top, but nicer" url="https://htop.dev/" logo="/assets/logos/brands/htop.svg" %}
{% include card-tile.html title="pandoc" description="Anything to anything document converter" url="https://pandoc.org/" logo="/assets/logos/brands/pandoc.svg" %}
{% include card-tile.html title="asciinema" description="Record terminal sessions" url="https://asciinema.org/" logo="/assets/logos/brands/asciinema.svg" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

**Ghostty** &mdash; by far the best cross-platform terminal emulator I've used
across Mac and Linux.

**`zsh`** and **oh-my-zsh** &mdash; I used to use `bash` before I got a
Mac[^mac-bash],
and decided to move to `zsh` on my Linux systems so I can [share the shell
configuration](https://github.com/itisrazza/dotfiles) between them. oh-my-zsh
has a good plugin ecosystem so I can spend less time configuring things.

**vim** &mdash; Learnt it for fun when I was ricing Linux, and I've gotten used
to it enough to prefer it over `nano` while I'm using the command-line. I'm
still not comfortable with vim-style editing everywhere though.

**pandoc** &mdash; I can't recommend this one enough. Paired with LaTeX, you can
turn your Markdown files into some really nice looking PDFs.

[^mac-bash]: Apple bundles `bash 3.2.57(1)` (released 2007) with macOS, which
             lacks a lot of features compared to modern `bash`.

</div>
</details>

## AI
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Claude" description="My preferred LLM as a Service and utilities" url="https://claude.ai/" logo="/assets/logos/brands/claude.svg" %}
{% include card-tile.html title="Ollama" description="Makes running local models easy" url="https://ollama.com/" logo="/assets/logos/brands/ollama.svg" %}
{% include card-tile.html title="OpenCode" description="For using local inference" url="https://opencode.ai/" logo="/assets/logos/brands/opencode.svg" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

I have some conflicted feelings on AI.

AI and Machine Learning are such broad fields with all sorts of applications.
When most people talk about AI, they're usually talking about generative AI,
and more specifically large language models and diffusion models.

I think training these models on publicly available data from the internet
was arguably ethical until they were commercialised at scale. Copyright and
IP law (at least my understanding of it) doesn't cover such novel uses.

That has changed now, and I don't know what the precedent should be going
forward. A lot of sites have closed public access to data and put up
paywalls and boundaries to limit scraping and training.

The energy and hardware needs for training and running inference with these
models are big enough that fewer resources are allocated to other use cases,
leading to increased costs for everything else, including personal compute.

I don't think AI is to blame for these issues. It does, however, exacerbate
problems we already have.

I'm also worried about personal data management and privacy. The most
well-known of these models run as SaaS (LLMaaS?), which comes with the
usual set of pitfalls. They might log your input and output. They might take
a model down without warning.

LLMs are, nonetheless, incredibly useful. I've used them to quickly build
up and validate ideas before committing to a project, parse and retrieve
text and information from documents, bodge things with a wild set of
inputs and requirements, and get a second pair of eyes on a solo project.
These examples show some of the things I use LLMs for and would not want to
give up without a good reason.

This is why I've started trying to run some of the open-weight
models on my own hardware, with a lot more control over what goes in and out.

</div>
</details>

## Development
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Visual Studio Code" description="Go-to code editor" url="https://code.visualstudio.com/" logo="/assets/logos/brands/vscode.svg" %}
{% include card-tile.html title="JetBrains IDEs" description="For Java, Rails and C# projects" url="https://www.jetbrains.com/" logo="/assets/logos/brands/jetbrains.svg" %}
{% include card-tile.html title="Homebrew" description="Package manager" url="https://brew.sh/" logo="/assets/logos/brands/homebrew.svg" %}
{% include card-tile.html title="OrbStack" description="Linux and Docker VMs" badge="macOS" url="https://orbstack.dev/" logo="/assets/logos/brands/orbstack.png" %}
{% include card-tile.html title="Nix" description="Package isolation" url="https://nixos.org/" logo="/assets/logos/brands/nix.svg" %}
{% include card-tile.html title="Bruno" description="API testing" url="https://www.usebruno.com/" logo="/assets/logos/brands/bruno.png" %}
{% include card-tile.html title="Sequel Ace" description="MySQL/MariaDB client" badge="macOS" url="https://sequel-ace.com/" logo="/assets/logos/brands/sequel-ace.png" %}
{% include card-tile.html title="Sequeler" description="Database explorer" badge="Linux" url="https://github.com/ellie-commons/sequeler" logo="/assets/logos/brands/sequeler.svg" %}
{% include card-tile.html title="UTM" description="Hypervisor" badge="macOS" url="https://mac.getutm.app/" logo="/assets/logos/brands/utm.png" %}
{% include card-tile.html title="VirtualBox" description="Hypervisor" url="https://www.virtualbox.org/" logo="/assets/logos/brands/virtualbox.svg" %}
{% include card-tile.html title="rbenv" description="Simple and fast Ruby version manager" url="https://github.com/rbenv/rbenv" logo="/assets/logos/brands/rbenv.svg" %}
{% include card-tile.html title="pyenv" description="rbenv, but for Python" url="https://github.com/pyenv/pyenv" logo="/assets/logos/brands/pyenv.svg" %}
{% include card-tile.html title="volta" description="Makes pulling Node less annoying" url="https://volta.sh/" logo="/assets/logos/brands/volta.png" mono="true" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

**Visual Studio Code** &mdash; For file-based projects, with the right LSP
extensions, it's all I need to get writing code.

**IntelliJ IDEA** and friends &mdash; VS Code alone hasn't been great for JVM
(Java and Kotlin), Rails and C# projects. This fills those gaps.

I also use **[Visual Studio]**, **[GNOME Builder]** and **[Xcode]** for some
platform-specific tasks.

[Visual Studio]: https://visualstudio.microsoft.com/
[GNOME Builder]: https://apps.gnome.org/en-GB/Builder/
[Xcode]: https://developer.apple.com/xcode/

For game development, I also use **[Godot](https://godotengine.org/)** and
**[Tiled](https://www.mapeditor.org/)**.

</div>
</details>

## Design
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Affinity" description="Photo, design and publishing" url="https://affinity.serif.com/" logo="/assets/logos/brands/affinity-suite.svg" %}
{% include card-tile.html title="Aseprite" description="Pixel art" url="https://www.aseprite.org/" logo="/assets/logos/brands/aseprite.svg" %}
{% include card-tile.html title="Figma" description="UI design" url="https://www.figma.com/" logo="/assets/logos/brands/figma.svg" %}
{% include card-tile.html title="Autodesk Fusion" description="CAD all the things" url="https://www.autodesk.com/products/fusion-360/personal-download" logo="/assets/logos/brands/autodesk-fusion.svg" %}
{% include card-tile.html title="OpenSCAD" description="CAD but code" url="https://openscad.org/" logo="/assets/logos/brands/openscad.svg" %}
{% include card-tile.html title="Blender" description="3D, but not CAD" url="https://www.blender.org/" logo="/assets/logos/brands/blender.svg" %}
</div>

## Hardware
{:.chrome-inset}

<div class="grid grid-gaps grid-col-2">
<div class="uses-system">
  <div class="uses-system-head">
    <img src="{{ '/assets/logos/systems/mercur.svg' | relative_url }}" alt="">
    <span class="card-tile-meta">
      <span class="title">Mercur</span>
      <span class="description">Custom-built PC</span>
    </span>
  </div>
  <dl class="uses-system-specs">
    <dt>OS</dt><dd>Arch Linux, Windows 11</dd>
    <dt>CPU</dt><dd>AMD Ryzen 7 5700X</dd>
    <dt>RAM</dt><dd>64 GB DDR4</dd>
    <dt>GPU</dt><dd>AMD Radeon RX 7800 XT</dd>
    <dt>SSD</dt><dd>4 TB (Linux), 1 TB (Windows)</dd>
  </dl>
</div>
<div class="uses-system">
  <div class="uses-system-head">
    <img src="{{ '/assets/logos/systems/pamant.svg' | relative_url }}" alt="">
    <span class="card-tile-meta">
      <span class="title">Pământ</span>
      <span class="description">MacBook Pro (14", 2024)</span>
    </span>
  </div>
  <dl class="uses-system-specs">
    <dt>OS</dt><dd>macOS</dd>
    <dt>CPU</dt><dd>Apple M4 Pro</dd>
    <dt>RAM</dt><dd>24 GB LPDDR5X</dd>
    <dt>GPU</dt><dd><i>(integrated)</i></dd>
    <dt>SSD</dt><dd>1 TB</dd>
  </dl>
</div>
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Operating systems</summary>
<div class="collapsible-body" markdown="1">

**Windows** &mdash; well... Windows. It's been getting worse to use from 2022
onwards, so it only gets booted up once every few months at most.

**macOS** &mdash; my primary daily driver. It's a nice middle ground between the
UNIX machinery I've gotten used to on Linux, and the wide software support Windows
has.

**Linux**[^gnupluslinux] &mdash; I've been using it on-and-off since roughly 2011.
I've become increasingly familiar with the way it works over the years and decided
to take the full plunge as the daily driver on my desktop in August 2025. Haven't
had any issues so far.

**[KDE](http://kde.org/)** &mdash; my go-to desktop environment when I need to use
my desktop (Linux). It retains the desktop metaphor and way of working I had become
accustomed to ever since I started using computers, and everything tends to be
fairly well integrated. Honourable mentions to [GNOME](http://gnome.org/),
[XFCE](https://www.xfce.org/), [Niri](https://yalter.github.io/niri/) and
[i3](https://i3wm.org/), where I've also spent a good amount of time.

[^gnupluslinux]: some people may want it to be called GNU/Linux or GNU+Linux, but I'm not into the libre purism schtick. Or expanding to the full GNU/systemd/FreeDesktop/KDE/Flatpak/Linux.<br>Jokes aside, to disambiguate platforms if needed, I might use "the FreeDesktop platform" to refer to UNIX-likes that more or less support X/Wayland with the usual desktop standards.

</div>
</details>

<div class="grid grid-gaps grid-col-3" style="margin-top:0.5rem">
{% include card-tile.html title="Logitech G512 Carbon" description="Full-size keyboard, I use nearly every key" logo="/assets/logos/brands/lt-g512.png" url="https://www.pbtech.co.nz/product/KEYLOG4253602/Logitech-G512-CARBON-LIGHTSYNC-RGB-Clicky-Mechanic" %}
{% include card-tile.html title="Logitech MX Vertical" description="Reduces wrist strain compared to a standard mouse" logo="/assets/logos/brands/lt-mx-vertical.png" url="https://www.pbtech.co.nz/product/MSELOG4393045/Logitech-MX-Vertical-Advanced-Ergonomic-Wireless-M" %}
{% include card-tile.html title="Apple Magic Trackpad" description="For gestures and cross-platform input consistency" logo="/assets/logos/brands/apple-magic-trackpad.png" url="https://www.pbtech.co.nz/product/MSEAPP6360183/Apple-Magic-Trackpad--Black--Multi--Touch-Surface" %}
{% include card-tile.html title="UGREEN DP KVM" description="Allows switching between my desktop and laptop workstations" logo="/assets/logos/brands/ugreen-dp-kvm.png" url="https://www.aliexpress.com/item/1005009096747884.html" %}
{% include card-tile.html title="Startech Thunderbolt 3 Dock" description="One USB-C cable, two display outputs and USB" logo="/assets/logos/brands/startech-tb3-dock.png" url="https://www.pbtech.co.nz/product/NBDSTT4417251/StarTechcom-Thunderbolt-3-Laptop-Docking-Station-D" %}
{% include card-tile.html title="Blue Yeti" description="The camera microphone is plain unusable" logo="/assets/logos/brands/blue-yeti.png" %}
{% include card-tile.html title="2× DELL P2214H" description="Low cost and reliable monitors" logo="/assets/logos/brands/dell-p2214h.png" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

I initially built the desktop in 2019 to have a solid workstation to use at
home and access while I'm at uni, upgrading it over time. The guiding
principle for part choices initially was "it should run Linux well", and has
been triple-booting Windows 10, macOS[^hackintosh] and Arch Linux for most of its life.

Laptop-wise, I've sprung for a last-gen MacBook Pro. They're quite honestly the
best laptops on the market[^laptopgood], as my needs for a laptop have outgrown
my previous setup.

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

On peripherals:

* **Keyboard:** [Logitech G512 Carbon Lightsync](https://www.pbtech.co.nz/product/KEYLOG4253602/Logitech-G512-CARBON-LIGHTSYNC-RGB-Clicky-Mechanic) &mdash;
  I prefer clickier mechanical keyboards, and tend to use 102 of the 104 keys PC keyboards have had since 1995.
* **Mouse:** [Logitech MX Vertical](https://www.pbtech.co.nz/product/MSELOG4393045/Logitech-MX-Vertical-Advanced-Ergonomic-Wireless-M) &mdash;
  Most mice I've had in the past are too small for my hands, this one was the first comfortable one I've had.
* **Trackpad:** [Magic Trackpad](https://www.pbtech.co.nz/product/MSEAPP6360183/Apple-Magic-Trackpad--Black--Multi--Touch-Surface) &mdash;
  Wanted to give it a go, not just as a mouse but also as something to tinker with `libinput`.
* **Camera:** a crappy 1080p one I got my hands on in early 2020.
* **Microphone:** Logitech Blue Yeti USB &mdash;
  Been told too many times I sound as if I'm speaking into a can.
* **Displays:** 2&times; DELL P2214H (1920&times;1080 @ 60Hz) &mdash;
  1080p is all you need[^1080p]. Fairly cheap[^cheap], too.

[^1080p]: not really, a HiDPI display (4K/2160p) would be nicer. These are ex-lease.
[^cheap]: roughly NZ$100 each.

The computers are named after celestial bodies in the [solar system] and are
symbolised with [planetary symbols].

[solar system]: https://en.wikipedia.org/wiki/Solar_System
[planetary symbols]: https://en.wikipedia.org/wiki/Planetary_symbols

</div>
</details>

## Homelab
{:.chrome-inset}

<div class="grid grid-gaps grid-col-2">
<div class="uses-system">
  <div class="uses-system-head">
    <img src="{{ '/assets/logos/systems/marte.svg' | relative_url }}" alt="">
    <span class="card-tile-meta">
      <span class="title">Marte</span>
      <span class="description">Custom-built PC</span>
    </span>
  </div>
  <dl class="uses-system-specs">
    <dt>OS</dt><dd>Debian Linux</dd>
    <dt>CPU</dt><dd>AMD Ryzen 5 3600</dd>
    <dt>RAM</dt><dd>32 GB DDR4</dd>
    <dt>GPU</dt><dd>AMD Radeon RX 580</dd>
    <dt>SSD</dt><dd>256 GB (OS), 2× 512 GB (data)</dd>
    <dt>HDD</dt><dd>2× 6 TB (data)</dd>
  </dl>
</div>
<div class="uses-system">
  <div class="uses-system-head">
    <img src="{{ '/assets/logos/systems/cupru.svg' | relative_url }}" alt="">
    <span class="card-tile-meta">
      <span class="title">Cupru</span>
      <span class="description">HP Proliant DL20 Gen9 (Offline)</span>
    </span>
  </div>
  <dl class="uses-system-specs">
    <dt>OS</dt><dd>Debian Linux</dd>
    <dt>CPU</dt><dd>Intel Xeon E3-1240 v5</dd>
    <dt>RAM</dt><dd>?</dd>
    <dt>SSD</dt><dd>?</dd>
    <dt>HDD</dt><dd>?</dd>
  </dl>
</div>
</div>

<div class="grid grid-gaps grid-col-3" style="margin-top:0.5rem">
{% include card-tile.html title="Docker" description="Container framework" url="https://www.docker.com/" logo="/assets/logos/brands/docker.svg" %}
{% include card-tile.html title="libvirtd" description="Hypervisor" url="https://libvirt.org/" logo="/assets/logos/brands/libvirtd.svg" %}
{% include card-tile.html title="Tailscale" description="Mesh VPN" url="https://tailscale.com/" logo="/assets/logos/brands/tailscale.svg" %}
{% include card-tile.html title="Portainer" description="Docker management" url="https://www.portainer.io/" logo="/assets/logos/brands/portainer.svg" %}
{% include card-tile.html title="Caddy" description="Web server" url="https://caddyserver.com/" logo="/assets/logos/brands/caddy.svg" %}
{% include card-tile.html title="Immich" description="Image storage" url="https://immich.app/" logo="/assets/logos/brands/immich.svg" %}
{% include card-tile.html title="Jellyfin" description="Media storage" url="https://jellyfin.org/" logo="/assets/logos/brands/jellyfin.svg" %}
</div>

<details class="collapsible" style="margin-top:0.5em">
<summary>Notes</summary>
<div class="collapsible-body" markdown="1">

I'm working on building out my homelab to store personal&nbsp;data and a library[^library],
and plan to also add capabilities for running development tools remotely, playing
around with cloud tooling, and just toying around with networking.

Marte was built with components that had been rotated out of my desktop when
they were upgraded, with the GPU used for video transcoding and AI inference
tasks.

Cupru (currently not in use) is a proper server whose only shortcoming is its
2.5" (laptop-sized) drive bays instead of the more common 3.5". I plan
for it to be a dedicated NAS once I get an array of SSDs to use with it,
leaving Marte to be an application server.

[^library]: collection of software, games, books, and media

The servers are named after [chemical elements]. Alternate names may be picked
for "paired" systems. For example: both [Staniu][staniu][^staniu] and [Cositor][cositor][^cositor] (two application servers in a group) refer to **Sn** (tin).

[chemical elements]: https://en.wikipedia.org/wiki/Periodic_table

[staniu]: https://dexonline.ro/definitie/staniol/sinteza
[^staniu]: borrowed directly from Stannum.

[cositor]: https://dexonline.ro/definitie/cositor/852793
[^cositor]: from Greek *[κασσίτερος](https://en.wiktionary.org/wiki/%CE%BA%CE%B1%CF%83%CF%83%CE%AF%CF%84%CE%B5%CF%81%CE%BF%CF%82) (kassíteros)*.

</div>
</details>

## Services
{:.chrome-inset}

Entries marked with * are referral links.
{:.chrome-inset}

<div class="grid grid-gaps grid-col-3">
{% include card-tile.html title="Proton *" description="Email, Cloud Storage, VPN" url="https://pr.tn/ref/5BB3E8N0QM80" logo="/assets/logos/brands/proton.svg" %}
{% include card-tile.html title="Bitwarden" description="Mostly open-source password manager" url="https://bitwarden.com/" logo="/assets/logos/brands/bitwarden.svg" %}
{% include card-tile.html title="Vultr *" description="Web hosting" url="https://www.vultr.com/?ref=9807211" logo="/assets/logos/brands/vultr.svg" %}
{% include card-tile.html title="Linode *" description="Web hosting" url="https://www.linode.com/lp/refer/?r=fbe1c2ad1594018b4d12489e4d716ea338e9c864" logo="/assets/logos/brands/akamai.svg" %}
</div>

</article>
