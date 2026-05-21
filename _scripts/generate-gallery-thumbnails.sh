#!/usr/bin/env bash

set -xeuo pipefail

THUMB_GEOMETRY="600x600"
LARGE_GEOMETRY="2400x2400"

mkdir -p assets/gallery/thumbs
mkdir -p assets/gallery/large

for image_path in assets/gallery/*.jpg; do
  image="$(basename "$image_path" ".jpg")"

  convert "assets/gallery/$image.jpg" \
    -auto-orient                      \
    -strip                            \
    -thumbnail "$THUMB_GEOMETRY"      \
    -interlace Plane                  \
    -quality 60                       \
    "assets/gallery/thumbs/$image.jpg"

  convert "assets/gallery/$image.jpg" \
    -auto-orient                      \
    -strip                            \
    -resize "${LARGE_GEOMETRY}>"      \
    -interlace Plane                  \
    -quality 82                       \
    "assets/gallery/large/$image.jpg"
done
