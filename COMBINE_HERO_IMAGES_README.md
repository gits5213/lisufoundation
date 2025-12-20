# Combine Hero Images

This script combines all images from `app/image/heroImage` into a single image with transparent background.

## Prerequisites

The script uses Node.js with Sharp. Sharp has been installed as a dev dependency:
```bash
npm install sharp --save-dev
```

## Usage

Run the script:
```bash
node combine_hero_images.js
```

## Output

The script will create:
- `app/image/heroImage/heroImages_combined.png` - Full size combined image
- `app/image/heroImage/heroImages_combined_small.png` - Smaller version (if original is > 2000px wide)

## How it works

1. Loads all images from `app/image/heroImage` directory
2. Converts them to RGBA format (with transparency)
3. Resizes all images to the same size (maintaining aspect ratio)
4. Arranges them in a grid layout
5. Combines them into a single PNG image with transparent background

## Using the combined image

After running the script, you can use `heroImages_combined.png` or `heroImages_combined_small.png` in your home page hero section.

