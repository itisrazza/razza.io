#!/bin/sh
# Usage: review-note.sh path/to/note.md

if [ -z "$1" ]; then
    echo "Usage: $0 <note-file>" >&2
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "error: $1 not found" >&2
    exit 1
fi

FILE="$1"

claude "Review this blog post. Check for spelling mistakes, grammatical errors,
and prose quality. Flag anything that reads awkwardly, is technically
inaccurate, or is missing. Don't make changes — just report what you find.

$(cat "$FILE")"
