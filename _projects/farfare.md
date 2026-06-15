---
title: Farfare
description: Turn your tickets into wallet passes
layout: project
platforms:
  - Web
  - iOS
  - AI
links:
  - label: Website
    url: https://farfare.web.app/
published: false
wip: true
---

<div class="callout callout-wip">
  <i class="bi bi-cone-striped"></i> Farfare is currently in a closed testing phase.
</div>

<!-- promo text -->
Stop hunting through email and apps every time you need your ticket. Farfare takes the PDFs issued by your rail provider and converts them into Wallet passes — saved to Apple Wallet or Google Wallet, ready at the barrier before you even think about it.
<!-- end promo text -->

## History

I had found dealing with the PDFs issued by CFR (Romanian Railways) a bit annoying.
I had to manage them manually. I placed them in Notion when I bought them, but
the app had a tendency to forget about them when it suspends and I have to
track them down and reload them again.

I thought to myself, would it be nicer if it was just an Apple Wallet pass, and
voilà. Idea[^car].

[^car]: Imagine doing this if you were in a car.

![ThinkPad laptop on a train table, Claude Code open while deciding on a language for the extractor](/assets/images/farfare/it-begins.jpg){:.full}

I decided to just open Claude and see how fast I can turn this idea from
concept, to it working, to something I can have out for people to use.

I figured using LLMs would allow for highly flexible ticket extraction. They're
definitely capable of more, but for this project I just use it for getting the
details for the ticket and structuring them in a JSON file.

I'd then run another pass to extract any barcodes in a number of different
formats (for now, just the QR codes CFR use).

And on that train ride, I had a ticket extraction service, but not much else. I
then focused on what else I'd need to do to make this work.

### The stack

![Architecture diagram: Web, iOS, and Android clients connect to Firebase (Hosting, Firestore, Storage, Remote Config, Auth, Functions, Push Notifications). Firebase connects to Stripe for payments and to a Google Cloud Run service containing the Extractor, which calls Claude as the LLM.](/assets/images/farfare/farfare-system-diagram.svg){:.full}

For how this is going to be hosted, I opted to host it on Google Cloud and
Firebase, with the goal of reducing the running costs as much as possible. If
no one uses it, it shouldn't cost anything to run.

I've opted to go for a serverless approach here, using Firebase services for
data storage, authentication and hosting. With the extractor running in
Google Cloud Run, which can spin up Docker containers.

The extractor service needed to run separately because I needed some native
libraries that Firebase's functions environment may not provide. Plus I want it
to be a separate component that can live on its own and be replaced at once.

I also planned for the possibility of mobile apps that can use on-device
processing (Foundation Model on iOS, MLKit and Gemini Nano on Android) to
extract tickets locally at a lower success rate before falling back to the
online service.
