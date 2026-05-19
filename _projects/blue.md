---
title: Blue
description: Lightweight scripting language for embedded devices
layout: project
platforms:
  - C
  - Embedded
links:
  - label: GitHub
    url: https://github.com/itisrazza/blue
published: false
wip: true
---

Blue is a small scripting language inspired by [Lua](https://www.lua.org) in
concept, built for low memory usage and broad compatibility — the goal is that
it should compile with even the most limited C compilers.

It is designed for two use cases:

- **Embedded devices** — the primary target is a multi-application e-ink tablet
  for tabletop gaming: tracking health points in MTG, running a dice roller, a
  chess clock, and so on. Each app would be a Blue script loaded onto the device.
- **Embedded in applications** — like Lua, Blue can be embedded into a host
  application (a game engine, for example) to provide a scripting layer.

Rather than distributing scripts as source text, Blue compiles to bytecode.
The idea is that bytecode is more space-efficient to store and more efficient
to execute than parsing text at runtime.

The project is named after [an energy drink](https://v-energy-drink.com/products/blue).
