---
title: SuperSize
description: Resize windows across multiple displays
link: https://github.com/itisrazza/SuperSize
layout: project
platforms: [ Windows ]
links:
  - label: Download
    url: "#download"
  - label: Source Code
    url: https://github.com/itisrazza/SuperSize
  - label: Python Plugin
    url: https://github.com/itisrazza/SuperSize.Python
  - label: Plugin API Docs
    url: https://supersize.thegreatrazz.nz/plugin-docs
---

> SuperSize is currently in development.

SuperSize allows you to resize your windows across multiple displays with different and user-selectable logic.

<div style="text-align:center;">
    <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/TPwzKhZflTE?si=OL9jDZRgGfDVTyGq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

It started out as a simple C# program that hooks into the Win32 API to resize windows across the entire screen, but I thought it would be fun to expand it into an entire program with a pluggable API to let you customise how the maximising played out.

For tinkerers, there will also be another plugin for scripting your own logic, the original implementation was based on [IronPython], but may switch to another scripting language before release.

[IronPython]: https://ironpython.net/

## Download

Test builds are occasionally [released on GitHub](https://github.com/itisrazza/SuperSize/releases).

The final release will also be published on the Microsoft Store.

> The Python plugin is not yet available.

## Plugin API

The Plugin API will be published at some point soon once the plugin loader is more complete.

## Example Python Script

```python
primary = get_screens()[0].Bounds
center = point(primary.X + primary.Width / 2, primary.Height / 2)

all_bounds = get_all_screen_bounds()
d_top = abs(center.Y - all_bounds.Top)
d_right = abs(center.X - all_bounds.Right)
d_bottom = abs(center.Y - all_bounds.Bottom)
d_left = abs(center.X - all_bounds.Left)

dw = min(d_left, d_right)
dh = min(d_top, d_bottom)

set_size(rectangle(center.X - dw,
                   center.Y - dh,
                   2 * dw,
                   2 * dh))
```
