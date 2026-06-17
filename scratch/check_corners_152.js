const { Jimp } = require('jimp');

const imgPath = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images\\extracted_img_152.jpg";

async function run() {
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;
  const data = image.bitmap.data;
  
  const corners = [
    { name: 'Top-Left', x: 0, y: 0 },
    { name: 'Top-Right', x: width - 1, y: 0 },
    { name: 'Bottom-Left', x: 0, y: height - 1 },
    { name: 'Bottom-Right', x: width - 1, y: height - 1 }
  ];
  
  for (const c of corners) {
    const idx = (c.y * width + c.x) * 4;
    console.log(`${c.name} (${c.x}, ${c.y}): rgba(${data[idx]}, ${data[idx+1]}, ${data[idx+2]}, ${data[idx+3]})`);
  }
}

run().catch(console.error);
