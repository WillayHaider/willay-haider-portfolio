import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const files = fs.readdirSync(publicDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const filePath = path.join(publicDir, file);

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const stat = fs.statSync(filePath);
    const originalSize = stat.size;

    if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9, effort: 10 })
        .toFile(filePath + '.tmp');
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      await sharp(filePath)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(filePath + '.tmp');
    }

    if (fs.existsSync(filePath + '.tmp')) {
      const newStat = fs.statSync(filePath + '.tmp');
      if (newStat.size < originalSize) {
        fs.renameSync(filePath + '.tmp', filePath);
        console.log(`Optimized ${file}: ${(originalSize / 1024).toFixed(1)}KB -> ${(newStat.size / 1024).toFixed(1)}KB (-${(((originalSize - newStat.size) / originalSize) * 100).toFixed(1)}%)`);
      } else {
        fs.unlinkSync(filePath + '.tmp');
        console.log(`Kept original ${file}: already optimal (${(originalSize / 1024).toFixed(1)}KB)`);
      }
    }
  }
}
