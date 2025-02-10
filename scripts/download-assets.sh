#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download images
curl -o public/paper-texture.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/paper-texture.png"
curl -o public/noise.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/noise.png"
curl -o public/totoro-pattern.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/totoro-pattern.png"
curl -o public/sootsprite.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/sootsprite.png"
curl -o public/totoro-leaf.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/totoro-leaf.png"
curl -o public/acorn.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/acorn.png"
curl -o public/small-totoro.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/small-totoro.png"
curl -o public/butterfly.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/butterfly.png"
curl -o public/flower.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/flower.png"
curl -o public/tree.png "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/tree.png"

echo "Assets downloaded successfully!" 