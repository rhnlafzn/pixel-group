const { Jimp } = require('jimp');
const path = require('path');

const srcPath = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_140.jpg";
const destPathLogo = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo.png";
const destPathLogoIdea = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo-idea.png";

async function run() {
  const srcImg = await Jimp.read(srcPath);
  const srcWidth = srcImg.width;
  const srcHeight = srcImg.height;
  const srcData = srcImg.bitmap.data;
  
  const destSize = 780;
  // Create a new blank transparent image
  const destImg = new Jimp({ width: destSize, height: destSize, color: 0x00000000 });
  const destData = destImg.bitmap.data;
  
  const cx = destSize / 2;
  const cy = destSize / 2;
  
  // Align source center (393, 389.5) with destination center (390, 390)
  // sx = tx + 3, sy = ty - 0.5 -> let's round
  const shiftX = 3;
  const shiftY = 0;
  
  for (let ty = 0; ty < destSize; ty++) {
    for (let tx = 0; tx < destSize; tx++) {
      const sx = tx + shiftX;
      const sy = ty + shiftY;
      
      if (sx >= 0 && sx < srcWidth && sy >= 0 && sy < srcHeight) {
        const srcIdx = (sy * srcWidth + sx) * 4;
        const r = srcData[srcIdx];
        const g = srcData[srcIdx + 1];
        const b = srcData[srcIdx + 2];
        
        // Calculate distance from center of destination
        const dx = tx - cx;
        const dy = ty - cy;
        const d = Math.sqrt(dx * dx + dy * dy);
        
        let alpha = 255;
        
        // If the pixel is very dark black, make it transparent
        if (r < 20 && g < 20 && b < 20) {
          alpha = 0;
        } else {
          // Circular crop with anti-aliasing
          if (d > 383) {
            alpha = 0;
          } else if (d > 378) {
            alpha = Math.round((383 - d) / 5 * 255);
          }
        }
        
        const destIdx = (ty * destSize + tx) * 4;
        destData[destIdx] = r;
        destData[destIdx + 1] = g;
        destData[destIdx + 2] = b;
        destData[destIdx + 3] = alpha;
      }
    }
  }
  
  await destImg.write(destPathLogo);
  console.log(`Successfully wrote high-res transparent logo to ${destPathLogo}`);
  
  await destImg.write(destPathLogoIdea);
  console.log(`Successfully wrote high-res transparent logo to ${destPathLogoIdea}`);
}

run().catch(console.error);
