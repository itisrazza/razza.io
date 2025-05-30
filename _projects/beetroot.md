---
title: Beetroot
description: Crowdsourced tunes queue for parties and get-togethers
layout: project
platforms:
  - Desktop
  - Web
links:
  - label: Website
    url: https://beetroot.live/
  - label: GitHub
    url: https://github.com/beetroot-music
---

> Beetroot is currently in development.

Beetroot solves the question of "who's on aux?" whenever someone asks to queue a song. It is similar to [SharePlay] and [Spotify Jams], but allows music from multiple sources to be queued.

<div style="text-align:center">
  <img src="{{ '/assets/images/beetroot/client-feb-2025.png' | relative_url }}" alt="Screenshot of Beetroot Player with a few tracks in the queue." style="max-width:100%">
</div>

[SharePlay]: https://support.apple.com/en-nz/guide/iphone/iphb657eb791/ios
[Spotify Jams]: https://support.spotify.com/us/article/jam

I'm looking at implementing the following sources:

* **Local Media Playback** - like your own collection of MP3s, for example
* **[Spotify]**
* **[Apple Music]¹**
* **[SoundCloud]**

[Spotify]: https://spotify.com/
[Apple Music]: https://music.apple.com/
[SoundCloud]: https://soundcloud.com/

¹ Only on platforms where [MusicKit](https://developer.apple.com/musickit) is available

At launch, Beetroot will be released for:

* Windows
* macOS
* Linux (Flatpak)
