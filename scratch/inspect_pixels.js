const { Jimp } = require('jimp');

const imgPath = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_140.jpg";

async function run() {
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;
  const cx = Math.floor(width / 2);
  const cy = Math.floor(height / 2);
  const data = image.bitmap.data;
  
  console.log(`Image info: ${width}x${height}, Center: ${cx}, ${cy}`);
  
  // Inspect a line of pixels horizontally from center to right edge
  for (let x = cx; x < width; x++) {
    const idx = (cy * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    
    // Print if it deviates from white
    if (x % 10 === 0 || (r < 250 || g < 250 || b < 250)) {
      console.log(`x=${x}, color: rgba(${r}, ${g}, ${b}, ${a})`);
    }
  }
}

run().catch(console.error);
