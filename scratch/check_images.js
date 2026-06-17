const fs = require('fs');
const path = require('path');

const workspace_dir = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group";

const candidates = [
  path.join(workspace_dir, "public", "logo.png"),
  path.join(workspace_dir, "public", "logo-idea.png"),
  path.join(workspace_dir, "extracted_images", "extracted_img_140.jpg"),
  path.join(workspace_dir, "extracted_images", "extracted_img_152.jpg")
];

function getPngSize(buffer) {
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function getJpgSize(buffer) {
  let i = 2;
  while (i < buffer.length) {
    if (buffer[i] === 0xFF) {
      const marker = buffer[i + 1];
      if (marker === 0xC0 || marker === 0xC1 || marker === 0xC2 || marker === 0xC3) {
        const height = buffer.readUInt16BE(i + 5);
        const width = buffer.readUInt16BE(i + 7);
        return { width, height };
      }
      i += 2 + buffer.readUInt16BE(i + 2);
    } else {
      i++;
    }
  }
  throw new Error("Could not find SOF marker");
}

for (const p of candidates) {
  if (fs.existsSync(p)) {
    try {
      const buffer = fs.readFileSync(p);
      let size;
      if (p.endsWith('.png')) {
        size = getPngSize(buffer);
      } else {
        size = getJpgSize(buffer);
      }
      console.log(`Path: ${p}`);
      console.log(`Size: ${size.width}x${size.height}`);
    } catch (e) {
      console.log(`Error reading ${p}: ${e.message}`);
    }
  } else {
    console.log(`Not found: ${p}`);
  }
}
