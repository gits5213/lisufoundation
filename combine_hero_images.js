const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function combineHeroImages() {
  const heroDir = path.join(__dirname, 'app', 'image', 'heroImage');
  
  // Map image filenames to program names
  const programLabels = {
    'disasterRelief.jpeg': 'Disaster Relief',
    'educationSupport.jpeg': 'Education Support',
    'employmentOpportunities.jpeg': 'Employment',
    'funeralBurialSupport.jpeg': 'Funeral Support',
    'healthcareServices.jpeg': 'Healthcare',
    'housingShelter.jpeg': 'Housing & Shelter',
    'humanitarianAidPrograms.jpeg': 'Humanitarian Aid',
    'orphanChildreSupport.jpeg': 'Orphan Support',
    'safeWaterAccess.jpeg': 'Safe Water',
    'umrahHajjAssistanceProgram.jpeg': 'Umrah & Hajj'
  };
  
  // Get all image files (exclude already combined images)
  const files = fs.readdirSync(heroDir)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('heroImages_combined'))
    .sort();
  
  if (files.length === 0) {
    console.log('No images found in heroImage directory');
    return;
  }
  
  console.log(`Found ${files.length} images:`);
  files.forEach(f => console.log(`  - ${f}`));
  
  // Load and process all images
  const images = [];
  let maxWidth = 0;
  let maxHeight = 0;
  
  for (const file of files) {
    const filePath = path.join(heroDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      const label = programLabels[file] || file.replace(/\.(jpg|jpeg|png)$/i, '').replace(/([A-Z])/g, ' $1').trim();
      images.push({
        path: filePath,
        width: metadata.width,
        height: metadata.height,
        format: metadata.format,
        label: label
      });
      maxWidth = Math.max(maxWidth, metadata.width);
      maxHeight = Math.max(maxHeight, metadata.height);
      console.log(`Loaded ${file}: ${metadata.width}x${metadata.height} - Label: ${label}`);
    } catch (error) {
      console.error(`Error loading ${file}:`, error.message);
    }
  }
  
  if (images.length === 0) {
    console.log('No images could be loaded');
    return;
  }
  
  // Calculate grid layout
  const numImages = images.length;
  const cols = Math.ceil(Math.sqrt(numImages));
  const rows = Math.ceil(numImages / cols);
  
  console.log(`\nArranging ${numImages} images in ${rows}x${cols} grid`);
  
  // Create resized images with labels
  const resizedImages = [];
  for (let idx = 0; idx < images.length; idx++) {
    const img = images[idx];
    // Calculate scaling to fit within target size while maintaining aspect ratio
    const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
    const newWidth = Math.round(img.width * scale);
    const newHeight = Math.round(img.height * scale);
    
    // Resize the image
    const resized = await sharp(img.path)
      .resize(newWidth, newHeight, {
        fit: 'inside',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .ensureAlpha()
      .toBuffer();
    
    // Create modern label SVG (escape XML special characters)
    const fontSize = Math.max(14, Math.round(maxWidth * 0.045));
    const labelPadding = 10;
    const labelHeight = fontSize + (labelPadding * 2) + 4;
    const labelWidth = maxWidth;
    const borderRadius = 8;
    
    // Escape XML special characters
    const escapedLabel = img.label
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    
    const labelSvg = `
      <svg width="${labelWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="labelGrad${idx}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#1e40af;stop-opacity:0.95" />
            <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:0.95" />
          </linearGradient>
          <filter id="shadow${idx}">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <!-- Background with rounded corners -->
        <rect 
          x="8" 
          y="2" 
          width="${labelWidth - 16}" 
          height="${labelHeight - 4}" 
          rx="${borderRadius}" 
          ry="${borderRadius}"
          fill="url(#labelGrad${idx})"
          filter="url(#shadow${idx})"
          opacity="0.95"
        />
        <!-- Text -->
        <text 
          x="${labelWidth / 2}" 
          y="${labelHeight / 2 + 1}" 
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
          font-size="${fontSize}" 
          font-weight="600"
          fill="#ffffff" 
          text-anchor="middle" 
          dominant-baseline="middle"
          letter-spacing="0.3px"
        >${escapedLabel}</text>
      </svg>
    `;
    
    const labelBuffer = Buffer.from(labelSvg);
    
    // Create canvas with transparent background
    const canvasHeight = maxHeight + labelHeight;
    const canvas = await sharp({
      create: {
        width: maxWidth,
        height: canvasHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: resized,
          top: 0,
          left: Math.round((maxWidth - newWidth) / 2)
        },
        {
          input: labelBuffer,
          top: maxHeight,
          left: 0
        }
      ])
      .png()
      .toBuffer();
    
    resizedImages.push({
      buffer: canvas,
      height: canvasHeight
    });
  }
  
  // Update maxHeight to include label height
  const labelHeight = Math.max(14, Math.round(maxWidth * 0.045)) + 24;
  const cellHeight = maxHeight + labelHeight;
  
  // Create combined image
  const combinedWidth = cols * maxWidth;
  const combinedHeight = rows * cellHeight;
  
  console.log(`Creating combined image: ${combinedWidth}x${combinedHeight} pixels`);
  
  // Create base canvas
  let combined = await sharp({
    create: {
      width: combinedWidth,
      height: combinedHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .png()
    .toBuffer();
  
  // Composite all images onto the canvas
  const composites = [];
  for (let idx = 0; idx < resizedImages.length; idx++) {
    const row = Math.floor(idx / cols);
    const col = idx % cols;
    const x = col * maxWidth;
    const y = row * cellHeight;
    
    composites.push({
      input: resizedImages[idx].buffer,
      top: y,
      left: x
    });
  }
  
  combined = await sharp(combined)
    .composite(composites)
    .png()
    .toBuffer();
  
  // Save combined image
  const outputPath = path.join(heroDir, 'heroImages_combined.png');
  fs.writeFileSync(outputPath, combined);
  console.log(`\nCombined image saved to: ${outputPath}`);
  console.log(`Final size: ${combinedWidth}x${combinedHeight} pixels`);
  
  // Also save to public folder
  const publicDir = path.join(__dirname, 'public', 'image', 'heroImage');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicPath = path.join(publicDir, 'heroImages_combined.png');
  fs.writeFileSync(publicPath, combined);
  console.log(`Also saved to: ${publicPath}`);
  
  // Create smaller version if too large (max 2000px width)
  if (combinedWidth > 2000) {
    const scaleFactor = 2000 / combinedWidth;
    const smallWidth = Math.round(combinedWidth * scaleFactor);
    const smallHeight = Math.round(combinedHeight * scaleFactor);
    
    const smallCombined = await sharp(combined)
      .resize(smallWidth, smallHeight, {
        fit: 'inside',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    const outputPathSmall = path.join(heroDir, 'heroImages_combined_small.png');
    fs.writeFileSync(outputPathSmall, smallCombined);
    console.log(`Smaller version saved to: ${outputPathSmall}`);
    console.log(`Small version size: ${smallWidth}x${smallHeight} pixels`);
    
    const publicPathSmall = path.join(publicDir, 'heroImages_combined_small.png');
    fs.writeFileSync(publicPathSmall, smallCombined);
  }
  
  console.log('\nDone!');
}

combineHeroImages().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
