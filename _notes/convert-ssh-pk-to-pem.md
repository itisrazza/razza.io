---
layout: post
title:  "Converting SSH private keys to .pem"
date:   2021-11-09
categories: notes linux
---

I've been working on some GitHub Actions workflows to automate deployment and found this SFTP upload action: 

[SFTP Deploy - GitHub Marketplace](https://github.com/marketplace/actions/sftp-deploy)

I found it to do the job quite nicely, but one irritation I have with it is its use of `.pem` files for its private key. I had done this a while ago and completely forgot how to do it, so here is goes up here so I can remember it again.

# Generating the SSH key pair

This goes like every other time I have to generate an SSH key. Though, to maximise compatibility with different SSH clients, I opt for `rsa` here.

```
ssh-keygen -t rsa -b 4096 -m PEM
```

Make sure you don't wipe out your personal SSH key (`~/.ssh/id_rsa*`) by accident.
