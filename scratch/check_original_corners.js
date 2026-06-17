const { Jimp } = require('jimp');
const path = require('path');

async function check(p) {
  const image = await Jimp.read(p);
  const width = image.width;
  const height = image.height;
  const data = image.bitmap.data;
  
  console.log(`Path: ${p} (${width}x${height})`);
  const corners = [
    { name: 'Top-Left', x: 0, y: 0 },
    { name: 'Top-Right', x: width - 1, y: 0 },
    { name: 'Bottom-Left', x: 0, y: height - 1 },
    { name: 'Bottom-Right', x: width - 1, y: height - 1 }
  ];
  
  for (const c of corners) {
    const idx = (c.y * width + c.x) * 4;
    console.log(`  ${c.name}: rgba(${data[idx]}, ${data[idx+1]}, ${data[idx+2]}, ${data[idx+3]})`);
  }
}

async function run() {
  await check("c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo.png");
  await check("c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo-idea.png");
}

run().catch(console.error);
