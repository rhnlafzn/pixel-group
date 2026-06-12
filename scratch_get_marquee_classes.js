const fs = require('fs');
const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';

if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== MARQUEE IMAGES CLASSES ===');
  
  // Find images containing "our-clients" in their src
  const imgRegex = /<img[^>]*our-clients[^>]*>/gi;
  let match;
  let count = 0;
  while ((match = imgRegex.exec(html)) !== null && count < 10) {
    console.log(match[0]);
    count++;
  }
} else {
  console.log('File not found');
}
