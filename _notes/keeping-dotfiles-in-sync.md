---
layout: post
title: Keeping dotfiles in sync
date: 2025-04-09
categories: notes dotfiles
---

I wipe my systems, especially on Linux where data protability is much easier
than on Windows or macOS, fairly regularly. For systems where I log in fairly
regularly, such as my WSL sandbox or development server, I like to have my
various dotfiles and scripts synced.

This also works for something like macOS. When I received a new workstation
from work, I was able to get things up and going quite quickly even though I
had opted to reconfigure everything from the beginning.

There isn't really much of a need to use a specific dotfile manager. `git` is
all you need.

## Creating a dotfile store

Creating a dotfile store is as easy as creating a folder and create a bare Git
repo inside of it.

```bash
mkdir ...
cd ...
git init --bare
```

The files created in this directory are usually put in the `.git` folder in
most Git repositories. This folder will store all the Git data, while we treat
our entire home folder as the "source code" of our project.

To take advantage of this, we'll need to use Git with some arguments, the
easiest way of going about it is creating an alias.

```bash
# ~/.bashrc

export DOTFILES_DIR="$HOME/src/itisrazza/dotfiles"
alias dfgit="git --git-dir=\"${DOTFILES_DIR}\" --work-tree=\"${HOME}\""
```

## Adding files to the repo

You can now use the `dfgit` alias to add files from anywhere in your home
folder as if you were in a git repo.

```bash
dfgit add ~/.bashrc
dfgit commit
```

## Pusing and pulling changes

We're going through the basic motions at this point.

```bash
# push the changes (for the first time)
dfgit remote add origin git@github.com:itisrazza/dotfiles.git
dfgit push --set-upstream origin "$(dfgit branch --show-current)"
```

```bash
dfgit push
dfgit pull
```

## Cloning the changes to a new system

Setting these up on a new system is also quite easy. Once you set Git and your
SSH keys up. You can simply clone the repository with the `--bare` argument.

```bash
git clone --bare git@github.com:itisrazza/dotfiles.git ~/src/itisrazza/dotfiles
```

You can then use the standard Git commands to restore the files, on a new
system, I generally make a backup of the default configs just in case and do a
hard reset.

```bash
git --git-dir=/abs/path/to/dotfiles --work-dir=$HOME reset --hard
```

## Tips for dotfile management

Now that dotfiles are used across multiple systems, they may not offer the
same commands and environments. Here are some tricks I use to make them easier
to move about.

### Split up your dotfiles

Instead of having a single `.bashrc` or `.zshrc` file, consider splitting up
your files. I've adapted this convention from how daemons on Linux tend to
separate out their files.

In your `.bashrc` you only need the following snippet.

```bash
for include in $HOME/.bashrc.d/*.bash; do
    source "$include"
done
```

You can now store things in their specific file, aliases goes in
`99-aliases.bash`, your environment managers in another file, etc.

They should also be easier to check in and out of Git.

# Real world example

Here's a real world example, my own dotfiles. This isn't a complete picture,
but this shows some common settings I apply to my command-line tools.

{% include big-link.html
           icon='bi bi-github'
           title='itisrazza/dotfiles'
           subtitle="A subset of my own dotfiles split across multiple computers"
 %}
