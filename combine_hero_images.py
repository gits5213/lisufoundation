#!/usr/bin/env python3
"""
Script to combine all hero images into a single image with transparent background
"""

from PIL import Image
import os
from pathlib import Path

def combine_hero_images():
    # Path to hero images directory
    hero_dir = Path("app/image/heroImage")
    
    # Get all image files
    image_files = sorted([f for f in os.listdir(hero_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
    
    if not image_files:
        print("No images found in heroImage directory")
        return
    
    print(f"Found {len(image_files)} images:")
    for img in image_files:
        print(f"  - {img}")
    
    # Load all images
    images = []
    max_width = 0
    max_height = 0
    
    for img_file in image_files:
        img_path = hero_dir / img_file
        try:
            img = Image.open(img_path)
            # Convert to RGBA if not already
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            images.append(img)
            max_width = max(max_width, img.width)
            max_height = max(max_height, img.height)
            print(f"Loaded {img_file}: {img.width}x{img.height}")
        except Exception as e:
            print(f"Error loading {img_file}: {e}")
    
    if not images:
        print("No images could be loaded")
        return
    
    # Calculate grid layout (try to make it roughly square)
    num_images = len(images)
    cols = int(num_images ** 0.5) + (1 if (num_images ** 0.5) % 1 > 0 else 0)
    rows = (num_images + cols - 1) // cols
    
    print(f"\nArranging {num_images} images in {rows}x{cols} grid")
    
    # Resize all images to same size (maintaining aspect ratio, then centering)
    target_width = max_width
    target_height = max_height
    
    resized_images = []
    for img in images:
        # Calculate scaling to fit within target size while maintaining aspect ratio
        scale = min(target_width / img.width, target_height / img.height)
        new_width = int(img.width * scale)
        new_height = int(img.height * scale)
        
        # Resize image
        resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Create new image with transparent background
        new_img = Image.new('RGBA', (target_width, target_height), (0, 0, 0, 0))
        
        # Center the resized image
        x_offset = (target_width - new_width) // 2
        y_offset = (target_height - new_height) // 2
        new_img.paste(resized, (x_offset, y_offset), resized)
        
        resized_images.append(new_img)
    
    # Create combined image
    combined_width = cols * target_width
    combined_height = rows * target_height
    combined = Image.new('RGBA', (combined_width, combined_height), (0, 0, 0, 0))
    
    # Paste images in grid
    for idx, img in enumerate(resized_images):
        row = idx // cols
        col = idx % cols
        x = col * target_width
        y = row * target_height
        combined.paste(img, (x, y), img)
    
    # Save combined image
    output_path = hero_dir / "heroImages_combined.png"
    combined.save(output_path, 'PNG')
    print(f"\nCombined image saved to: {output_path}")
    print(f"Final size: {combined_width}x{combined_height} pixels")
    
    # Also create a smaller version for web (optional)
    # Scale down if too large (max 2000px width)
    if combined_width > 2000:
        scale_factor = 2000 / combined_width
        new_width = int(combined_width * scale_factor)
        new_height = int(combined_height * scale_factor)
        combined_small = combined.resize((new_width, new_height), Image.Resampling.LANCZOS)
        output_path_small = hero_dir / "heroImages_combined_small.png"
        combined_small.save(output_path_small, 'PNG')
        print(f"Smaller version saved to: {output_path_small}")
        print(f"Small version size: {new_width}x{new_height} pixels")

if __name__ == "__main__":
    combine_hero_images()

