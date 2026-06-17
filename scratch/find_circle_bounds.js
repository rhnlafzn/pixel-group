const { Jimp } = require('jimp');

const imgPath = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_140.jpg";

async function run() {
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;
  const data = image.bitmap.data;
  
  let minX = width, maxX = 0, minY = height, maxY = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // If pixel is not black (threshold 15)
      if (r > 15 || g > 15 || b > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  console.log(`Bounding box: X from ${minX} to ${maxX} (width ${maxX - minX + 1}), Y from ${minY} to ${maxY} (height ${maxY - minY + 1})`);
  console.log(`Center of bounding box: cx = ${(minX + maxX) / 2}, cy = ${(minY + maxY) / 2}`);
}

run().catch(console.error);
