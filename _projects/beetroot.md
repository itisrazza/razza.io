---
title: Beetroot
description: Crowdsourced tunes queue for parties and get-togethers
layout: project
platforms:
  - Desktop
  - Web
archived: true
---

<div class="callout callout-archived">
  <p><i class="bi bi-x-octagon"></i> Development on Beetroot has been stopped.</p>
</div>

Beetroot answers the question of "who's on aux?" — a shared queue that lets anyone at a gathering add songs, similar to [SharePlay] and [Spotify Jams] but across multiple music sources.

![Screenshot of Beetroot Player with a few tracks in the queue.]({{ '/assets/images/beetroot/client-feb-2025.png' | relative_url }}){:.full}

## History

[librespot-java]: https://github.com/librespot-org/librespot-java

The very first project with the name of "Beetroot" was a program I wrote in
2016 to sort my music by its metadata.

The tagline was "It roots through your beats, so you don't have to."

![Screenshot of the 2016 Beetroot music sorter.]({{ '/assets/images/beetroot/2016-beetroot.png' | relative_url }}){:.full}

It had some development, I had toyed around with hosting an HTTP server out of
the app to play my library remotely, but hadn't gone past it much.

A couple of years later, I reused the name for an even better project idea.


## 2018 - Beetroot Player

I then created Beetroot Player in 2018, when I was in my last year of
college[^college] with a simple goal in mind: "Allow party guests to queue
tracks to the playlist."

[^college]: that's "high school" for the Americans

It was originally created with JavaScript on [Electron]; I quickly built out
the user interface, library management, localisation, and playback, and was
fairly happy with what was there.

![Screenshot of Beetroot Player (2018).]({{ '/assets/images/beetroot/2018-beetroot.png' | relative_url }}){:.full}

[Electron]: https://www.electronjs.org/

When I started work on the server connectivity, which was needed for the
"having your guests queue tracks" bit, my inexperience left a lot of tech debt
I didn't know how to properly address at the time.

Looking back, if I had continued building it, the relay service would have been
written in PHP and use [SSE (Server-Sent Events)][SSE], which would've caused
its own issues.

[SSE]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events

Additionally, codec support was not uniform across platforms. A lot of music
playback technology[^mp3] is locked behind software patents, which are enforced
differently across the world, leading to having to install them manually on
most Linux distributions, which I wanted to support.

[^mp3]: such as MP3, AAC and friends

With all that in mind, I worked on other projects, with more interesting
problems in the meantime and stopped working on it as I was focusing more on my
studies.


## 2020 - Phoenix

Having learned some software development during university, and with COVID
having me at home most of the time, it was time to dust off this project.

This time around, I opted to go for native applications on each platform,
starting with [UWP] on Windows. I was fairly excited too, because I had been a
former Windows Phone user, and learned the basics of making apps[^wpapps] on
the platform — those skills transferred to UWP.

[UWP]: https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide
[^wpapps]: sadly I didn't publish or archive them. I wish I did.

From the get-go, there were improvements. A clear data model, proper bindings,
a nice media playback API, and the UX actually felt nice.

![Screenshot of Phoenix (2020).]({{ '/assets/images/beetroot/2020-beetroot.png' | relative_url }}){:.full}

While working on the player app, I had also started work on the web service,
going for TypeScript and Express. When I returned to the project later that
year, I picked up the web service first — the plan being to get the relay sorted
before returning to the app. By then though, UWP was fading in relevance, and
the app side stayed shelved.


## 2023 - Beetroot Music

By this point, I was on my way to finishing university and had been working in
software development for a bit. I had a much better sense of how to actually
build something like this.

The key unlock was discovering [librespot-java], an open-source
reverse-engineered Spotify client. That's what led me to choose Kotlin for the
desktop app — the library was JVM-based, and it meant I could offer real Spotify
playback without going through their official SDK. Mobile was Flutter, as both
Spotify and Apple Music had libraries available there.

<div style="background:var(--colour-background-elevated);margin-inline:-1.5rem;padding:1rem 1.5rem;display:flex;justify-content:center;align-items:center;border-radius:0.5rem;gap:1rem;">
  <img src="{{ '/assets/images/beetroot/logo-master.svg' | relative_url }}" alt="Beetroot logo" width="64" height="64">
  <img src="{{ '/assets/images/beetroot/logo-client.svg' | relative_url }}" alt="Beetroot Player logo" width="64" height="64">
  <img src="{{ '/assets/images/beetroot/logo-relay.svg'  | relative_url }}" alt="Beetroot Relay logo" width="64" height="64">
  <img src="{{ '/assets/images/beetroot/logo-neurofunk.svg' | relative_url }}" alt="Beetroot Neurofunk logo" width="64" height="64">
</div>

Given the licensing situation with those integrations, I went with an open-core
model. The desktop app, Beetroot "Amen Break", would be open-source with local
library support and an open plugin ecosystem. A separate closed-source build
would include the Spotify, Apple Music, and SoundCloud integrations. The mobile
app and relay service followed a similar split — Deepcore and the command-line
client NeuroFunk stayed open, the mobile app didn't.

This was the most complete version of the project by some distance. The relay
actually worked end-to-end. The plan was to develop in private and run open
betas around parties I was hosting or helping set up — a fitting way to test it.

It stalled for a reason that, in hindsight, was always going to catch up with
the project. When you're building on top of services that haven't agreed to
support you, you're at their mercy. YouTube changed their API mid-development.
Spotify changed their login system — librespot eventually caught up, but the
underlying Mercury protocol isn't documented anywhere, and reverse-engineering
it alone wasn't something I was going to take on.

By the time I stepped back, [SharePlay] and [Spotify Jams] had both shipped as
native features. The problem Beetroot set out to solve was solved, just not by
me.

[SharePlay]: https://support.apple.com/en-nz/guide/iphone/iphb657eb791/ios
[Spotify Jams]: https://support.spotify.com/us/article/jam

<video class="full" src="{{ '/assets/images/beetroot/beetroot-final.mp4' | relative_url }}" controls></video>

At some point I'll come back, clean it up, and release the source — not to pick
it up again, but to give the work somewhere to live.
