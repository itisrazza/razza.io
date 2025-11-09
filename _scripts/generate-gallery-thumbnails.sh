#!/usr/bin/env bash

set -xeuo pipefail

THUMB_GEOMETRY="1024x1024"

for image_path in assets/gallery/*.jpg; do
  image="$(basename "$image_path" ".jpg")"
  convert "assets/gallery/$image.jpg" -thumbnail "$THUMB_GEOMETRY" "assets/gallery/thumbs/$image.jpg"
done
