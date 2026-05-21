---
layout: post
title:  "Converting SSH private keys to .pem"
date:   2021-11-09
categories: notes linux
resources:
  - id: sftp-deploy
    label: SFTP Deploy
    description: SFTP Deploy — GitHub Actions Marketplace
    url: https://github.com/marketplace/actions/sftp-deploy
    type: GitHub
    icon: github
---

<div class="callout callout-migrated" markdown="1">
<i class="bi bi-clock-history"></i> Originally published on [Notion](https://www.notion.so/razza/Converting-SSH-Private-Keys-to-pem-0dab02fe75e747f5b7957ca7d68b7a28).

This is the original article with a few markup changes and spelling fixes.
</div>

I've been working on some GitHub Actions workflows to automate deployment and found this SFTP upload action:

{% include resource-download-card.html id="sftp-deploy" %}

I found it to do the job quite nicely, but one irritation I have with it is its use of `.pem` files for its private key. I had done this a while ago and completely forgot how to do it, so here it goes up here so I can remember it again.

# Generating the SSH key pair

This goes like every other time I have to generate an SSH key. Though, to maximise compatibility with different SSH clients, I opt for `rsa` here.

```bash
ssh-keygen -t rsa -b 4096 -m PEM
```

Make sure you don't wipe out your personal SSH key (`~/.ssh/id_rsa*`) by accident.
