---
title: SuperSize
description: Resize windows across multiple displays
link: https://github.com/itisrazza/SuperSize
layout: project
platforms: [ Windows ]
links:
  - label: Download
    url: https://github.com/itisrazza/SuperSize/releases
  - label: GitHub
    url: https://github.com/itisrazza/SuperSize
---

SuperSize lets you maximise your window across multiple displays for maximum
work (or play). It includes a couple of presets to define the window position
and size, and can be extended with [Python](https://supersize.razza.io/python)
to let you adapt it to your use case.

<div class="ss-animation">
  <div class="ss-screen">
    <div class="ss-screen-display">
      <div class="ss-screen-window ss-window-left"></div>
      <div class="ss-screen-display-bar"></div>
    </div>
    <div class="ss-screen-stand">
      <div class="ss-screen-stand-pole"></div>
      <div class="ss-screen-stand-bottom"></div>
    </div>
  </div>

  <div class="ss-screen">
    <div class="ss-screen-display">
      <div class="ss-screen-window ss-window-right"></div>
      <div class="ss-screen-display-bar"></div>
    </div>
    <div class="ss-screen-stand">
      <div class="ss-screen-stand-pole"></div>
      <div class="ss-screen-stand-bottom"></div>
    </div>
  </div>
</div>

<style>
  .ss-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #404040;
    color: #fafafa;
    padding: 1em;
    gap: 0.5em;
    border-radius: 0.5em;
    margin-inline: -1.25rem;

    .ss-screen {
      .ss-screen-display {
        position: relative;
        width: 7.5em;
        height: 5.625em;
        border: 0.25em solid black;
        border-radius: 0.25em;
        overflow: hidden;

        background: url('/assets/images/supersize/wallpaper.jpg');
        background-size: cover;

        .ss-screen-display-bar {
          position: absolute;
          height: 0.5em;
          background-color: #00000080;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .ss-screen-window {
          background-color: #FFFFFFC0;
          background: url('/assets/images/supersize/game.png');
          background-size: cover;
          background-position: center;
          border: 0.0625em solid #ffffff;
          border-top: 0.25em solid;
          box-sizing: border-box;
          position: absolute;
          border-radius: 0.125em;
          backdrop-filter: blur(0.25em) saturate(10%);

          animation-duration: 10s;
          animation-iteration-count: infinite;
        }

        .ss-window-left  { animation-name: ss-window-left;  }
        .ss-window-right { animation-name: ss-window-right; }
      }

      .ss-screen-stand {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .ss-screen-stand-pole {
          background: #e0e0e0;
          width: 2.5em;
          height: 1.25em;
        }

        .ss-screen-stand-bottom {
          background: #eeeeee;
          width: 3.75em;
          height: 0.5em;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .ss-animation {
      font-size: 24px;
    }
  }

  @keyframes ss-window-left {
    0%, 9%, 100% {
      left: 0.625em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    10%, 19% {
      left: 0;
      top: 0;
      width: 7.5em;
      height: 5.125em;
    }

    20%, 29% {
      left: 8.125em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    30%, 39% {
      left: 7.5em;
      top: 0;
      width: 7.5em;
      height: 5.125em;
    }

    40%, 49% {
      left: 5.125em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    50%, 99% {
      left: 0;
      top: 0;
      width: 15em;
      height: 5.125em;
    }
  }

  @keyframes ss-window-right {
    0%, 9%, 100% {
      left: -6.875em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    10%, 19% {
      left: -7.5em;
      top: 0;
      width: 7.5em;
      height: 5.125em;
    }

    20%, 29% {
      left: 0.625em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    30%, 39% {
      left: 0;
      top: 0;
      width: 7.5em;
      height: 5.125em;
    }

    40%, 49% {
      left: -3.125em;
      top: 0.625em;
      width: 6.25em;
      height: 3.75em;
    }

    50%, 99% {
      left: -7.5em;
      top: 0;
      width: 15em;
      height: 5.125em;
    }
  }
</style>

## Download

Releases are [publised directly on GitHub](https://github.com/itisrazza/SuperSize/releases) as portable executables.
