import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.resolve(__dirname, '../src/assets/landing/hero-image.png');
const outputFilePath = path.resolve(__dirname, '../src/assets/landing/hero-image.webp');

async function convertImage() {
  try {
    console.log(`Starting conversion of ${inputFilePath}`);
    await sharp(inputFilePath)
      .webp({ quality: 80 })
      .toFile(outputFilePath);
    console.log(`Successfully created ${outputFilePath}`);
    
    // Get file sizes for comparison
    const inputStats = fs.statSync(inputFilePath);
    const outputStats = fs.statSync(outputFilePath);
    
    console.log(`Original PNG size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`New WebP size: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Saved: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%`);
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
