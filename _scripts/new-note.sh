#!/bin/sh
# Usage: new-note.sh "Title of the post" [slug]

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <title> [slug]" >&2
    exit 1
fi

TITLE="$1"
DATE=$(date +%Y-%m-%d)
EDITOR="${EDITOR:-nvim}"

if [ -n "$2" ]; then
    SLUG="$2"
else
    SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//;s/-$//')
fi

NOTE_FILE="_notes/${SLUG}.md"
ASSETS_DIR="assets/notes/${DATE}-${SLUG}"

if [ -f "$NOTE_FILE" ]; then
    echo "error: $NOTE_FILE already exists" >&2
    exit 1
fi

mkdir -p "$ASSETS_DIR"

cat > "$NOTE_FILE" <<EOF
---
layout: post
title: "${TITLE}"
date: ${DATE}
categories: notes
---

EOF

echo "created $NOTE_FILE"
echo "created $ASSETS_DIR/"

"$EDITOR" "$NOTE_FILE"
