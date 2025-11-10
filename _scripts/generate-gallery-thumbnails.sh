#!/usr/bin/env bash

set -xeuo pipefail

THUMB_GEOMETRY="500x500"

mkdir -p assets/gallery/thumbs
for image_path in assets/gallery/*.jpg; do
  image="$(basename "$image_path" ".jpg")"
  convert "assets/gallery/$image.jpg" -auto-orient -strip -thumbnail "$THUMB_GEOMETRY" "assets/gallery/thumbs/$image.jpg"
done
