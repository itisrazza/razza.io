---
layout: project
published: false

title: rzjd
description: Organisation system for your notes and files

platforms:
    - Terminal
links:
  - label: GitHub
    url: https://github.com/itisrazza/rzjd
  - label: Docs
    url: https://github.com/itisrazza/rzjd/wiki
---

rzjd (Razza's [Johnny.Decimal] System Manager) is a tool to keep your notes
organised. It is designed to be used both interactively and through scripts.

Development stalled due to inconvenient data syncing, and eventually the project
lost its purpose when I moved off [Johnny.Decimal] altogether. May revisit if I
come back to a JD-style system.

## Design

I used [Go] for this project because:

* It compiles to a simple executable that can be added to `PATH`,
* cross-compiling for other platforms is straightforward,
* and it was an opportunity to try out [Charm]'s terminal UI libraries.

The `explore` mode was inspired by [calcurse] and [ranger], and is designed to
feel at home on a minimalist Linux desktop.

[calcurse]: https://www.calcurse.org/
[ranger]: https://github.com/ranger/ranger

[Johnny.Decimal]: https://jdcm.al/

[Go]: https://go.dev/
[Charm]: https://charm.sh/
