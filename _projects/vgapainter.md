---
title: VGAPainter
description: Bitmap painter and converter for low bpp image formats
layout: project
links:
  - label: Download
    url: https://github.com/cable-car-games/VGAPainter/releases
  - label: GitHub
    url: https://github.com/cable-car-games/VGAPainter
platforms: [ WIP, Windows ]
featured: true
---

<div class="callout"><b>Note:</b> If you're looking for a pixel art editor, you should really just use <a href="https://www.aseprite.org/">Aseprite</a>. This is mostly a personal exercise.</div>

VGAPainter is a 256-color bitmap editor primarily targeting VGA mode 13h. It also supports custom palettes, importing and exporting to true colour formats and a binary bitmap format.

This was created as an experiment and means of generating visuals capable of display in MS-DOS. But it can also be used in making pixel art for other systems as well.

## Planned rewrite

The current version targets Windows and is built on .NET. A rewrite in Kotlin using the Swing toolkit is planned — partly to bring it cross-platform, but mostly as an exercise to build a template for future JVM-based applications.

## System Requirements

|                    | GitHub Releases             | Microsoft Store                   |
|--------------------|-----------------------------|-----------------------------------|
| **OS**             | Windows XP or later*        | Windows 10, version 1809 or later |
| **.NET Framework** | .NET Framework 4.0 or later | (bundled)                         |
| **Licence**        | [WTFPL]                     | [Microsoft Store Terms of Sale]   |

[WTFPL]: http://www.wtfpl.net/about/
[Microsoft Store Terms of Sale]: https://www.microsoft.com/en-nz/store/b/terms-of-sale

\* Any OS capable of running .NET Framework 4.0 binaries, for example Linux with [Mono](https://www.mono-project.com/).
