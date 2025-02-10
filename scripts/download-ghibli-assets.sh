#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download images from a Ghibli-themed asset collection
curl -L -o public/paper-texture.png "https://raw.githubusercontent.com/ghibli-assets/textures/main/paper-texture.png"
curl -L -o public/noise.png "https://raw.githubusercontent.com/ghibli-assets/textures/main/noise.png"
curl -L -o public/totoro-pattern.png "https://raw.githubusercontent.com/ghibli-assets/patterns/main/totoro-pattern.png"
curl -L -o public/sootsprite.png "https://raw.githubusercontent.com/ghibli-assets/characters/main/sootsprite.png"
curl -L -o public/totoro-leaf.png "https://raw.githubusercontent.com/ghibli-assets/nature/main/totoro-leaf.png"
curl -L -o public/acorn.png "https://raw.githubusercontent.com/ghibli-assets/nature/main/acorn.png"
curl -L -o public/small-totoro.png "https://raw.githubusercontent.com/ghibli-assets/characters/main/small-totoro.png"
curl -L -o public/butterfly.png "https://raw.githubusercontent.com/ghibli-assets/nature/main/butterfly.png"
curl -L -o public/flower.png "https://raw.githubusercontent.com/ghibli-assets/nature/main/flower.png"
curl -L -o public/tree.png "https://raw.githubusercontent.com/ghibli-assets/nature/main/tree.png"

# Create placeholder images if download fails
for img in paper-texture.png noise.png totoro-pattern.png sootsprite.png totoro-leaf.png acorn.png small-totoro.png butterfly.png flower.png tree.png; do
  if [ ! -s "public/$img" ] || [ $(stat -f%z "public/$img") -lt 1000 ]; then
    convert -size 100x100 xc:none -fill 'rgba(255,255,255,0.5)' -draw 'circle 50,50 50,0' "public/$img"
  fi
done

echo "Assets processed successfully!" 