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

## Design

I had used [Go] for this project for the following reasons:

* It compiles to a simple executable which can simply be added to `PATH`,
* and it is easy to [compile binaries for other platforms](https://github.com/itisrazza/rzjd/blob/main/scripts/build-all.sh).
* This was an opportunity try out [Charm]'s terminal UI libraries.

On the user interaction front, the `explore` mode was inspired by programs such
as [calcurse] and [ranger], and should feel at home on a minimalist Linux
desktop.

[calcurse]: https://www.calcurse.org/
[ranger]: https://github.com/ranger/ranger

[Johnny.Decimal]: https://jdcm.al/

[Go]: https://go.dev/
[Charm]: https://charm.sh/
