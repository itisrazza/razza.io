default: build

# Full build
build: thumbs js jekyll

# CI
ci: build

# Build TypeScript bundles
js:
    node _build.mjs

# Generate gallery thumbnails
thumbs:
    ./_scripts/generate-gallery-thumbnails.sh

# Jekyll production build (set BASEURL env var to pass --baseurl)
jekyll:
    bundle exec jekyll build ${BASEURL:+--baseurl "$BASEURL"}

# Development server: esbuild watch + gallery watch + Jekyll serve
serve: thumbs js
    #!/usr/bin/env bash
    set -e
    trap 'kill $(jobs -p) 2>/dev/null' EXIT
    node _build.mjs --watch &
    watchexec -w assets/gallery --exts jpg -- ./_scripts/generate-gallery-thumbnails.sh &
    bundle exec jekyll serve

# Create a new note: just new "Title" [slug]
new title slug="":
    ./_scripts/new-note.sh "{{title}}" {{slug}}

# Review a note's content with Claude: just review _notes/my-note.md
review file:
    ./_scripts/review-note.sh "{{file}}"
