const { Jimp } = require('jimp');

async function run() {
  const img1 = await Jimp.read("c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo.png");
  const img2 = await Jimp.read("c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\public\\logo-idea.png");
  
  console.log(`logo.png size: ${img1.width}x${img1.height}`);
  console.log(`logo-idea.png size: ${img2.width}x${img2.height}`);
  
  img1.resize({ w: 100, h: 100 });
  img2.resize({ w: 100, h: 100 });
  
  let diffSum = 0;
  const d1 = img1.bitmap.data;
  const d2 = img2.bitmap.data;
  
  for (let i = 0; i < d1.length; i += 4) {
    diffSum += Math.abs(d1[i] - d2[i]);       // R
    diffSum += Math.abs(d1[i+1] - d2[i+1]);   // G
    diffSum += Math.abs(d1[i+2] - d2[i+2]);   // B
    diffSum += Math.abs(d1[i+3] - d2[i+3]);   // A
  }
  
  const avgDiff = diffSum / (100 * 100 * 4);
  console.log(`Average pixel difference after resize: ${avgDiff}`);
}

run().catch(console.error);
