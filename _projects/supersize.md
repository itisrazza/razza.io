---
title: SuperSize
description: Resize windows across multiple displays
link: https://github.com/itisrazza/SuperSize
layout: project
platforms: [ Windows ]
links:
  # - label: Website
  #   url: https://supersize.itisrazza.io/
  - label: GitHub
    url: https://github.com/itisrazza/SuperSize
---

SuperSize lets you maximise your window across multiple displays for maximum
work (or play). It includes a number of presets to define the window position and size,
and can be extended with Python scripts to allow for more advanced use cases.

<div style="text-align:center;">
    <iframe
      width="640" height="360"
      src="https://www.youtube-nocookie.com/embed/TPwzKhZflTE?si=OL9jDZRgGfDVTyGq"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
</div>

## History

It started out as a simple C# program that hooks into the Win32 API to resize
windows across the entire screen, but I thought it would be fun to expand it
into an entire program with a pluggable API to let you customise how the
maximising played out.
