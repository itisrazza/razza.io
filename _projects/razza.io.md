---
title: razza.io
description: About this website
layout: project
platforms: [ Web ]
links:
  - label: GitHub
    url: https://github.com/itisrazza/razza.io
---

## Technology

This website is built with [Jekyll] and is hosted on [GitHub Pages]. It uses a
custom theme written largely by hand with HTML and [SCSS].

[Jekyll]: https://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[SCSS]: https://sass-lang.com/

HTML and CSS does the heavy lifting here, with some JS sprinked in to add a few
easter eggs, analytics, or the map on the [Travels](travels) page.

This website was previously made with PHP in 2016-2022, React in 2021-2023. I
switched to Jekyll because I keeps everything much simpler with keeping site
content authored as Markdown, and saves on web server maintenance.

## Design

I had come up with a mini design system for my own personal branding on the
internet, which I use to guide the design on projects not needing their own
style guides.

It started out with a logo and selection of fonts and kinda grew from there.
I created a mockup in [Figma] before implementing it.

[Figma]: https://www.figma.com/design/4DOj6e0gjkjN80ejJBvFqr/Razza-Design?node-id=3-25&t=WsewlEItHQ3YZFem-1

For typography, the main body text is [Nunito Sans] with the lower case height
increased and optical size reduced[^razza-sans]. For monospace text, I use
[Commit Mono].

[^razza-sans]: in other projects where variable font support is limited, you may see a "Razza Sans" instead

[Nunito Sans]: https://fonts.google.com/specimen/Nunito+Sans
[Commit Mono]: https://commitmono.com/
