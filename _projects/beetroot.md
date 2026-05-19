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
archived: true
---

<div class="alert">
  <p>Development on Beetroot has been stopped.</p>
  <p>Integrating with multiple music services means working around APIs that are largely locked down. Keeping those integrations working solo over time just isn't feasible.</p>
</div>

Beetroot answers the question of "who's on aux?" — a shared queue that lets anyone at a gathering add songs, similar to [SharePlay] and [Spotify Jams] but across multiple music sources.

<div style="text-align:center">
  <img src="{{ '/assets/images/beetroot/client-feb-2025.png' | relative_url }}" alt="Screenshot of Beetroot Player with a few tracks in the queue." style="max-width:100%">
</div>

[SharePlay]: https://support.apple.com/en-nz/guide/iphone/iphb657eb791/ios
[Spotify Jams]: https://support.spotify.com/us/article/jam

## History

Beetroot started in high school and got revisited a few times through university.

The earliest version was built on [Electron]. It later moved to [UWP], and eventually to Java after discovering [librespot-java] — a reverse-engineered Spotify client library. That shift unlocked real progress: Spotify playback and MP3 support both landed, along with a rudimentary web relay that let people queue songs remotely.

It stalled out while trying to add YouTube support. Both YouTube and Spotify changed their APIs around the same time, and maintaining integrations across multiple services that actively resist third-party clients wasn't something I could keep up with solo.

[Electron]: https://www.electronjs.org/
[UWP]: https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide
[librespot-java]: https://github.com/librespot-org/librespot-java
