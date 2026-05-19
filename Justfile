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

# Jekyll production build
jekyll:
    bundle exec jekyll build

# Development server: esbuild watch + gallery watch + Jekyll serve
serve: thumbs js
    #!/usr/bin/env bash
    set -e
    trap 'kill $(jobs -p) 2>/dev/null' EXIT
    node _build.mjs --watch &
    watchexec -w assets/gallery --exts jpg -- ./_scripts/generate-gallery-thumbnails.sh &
    bundle exec jekyll serve
