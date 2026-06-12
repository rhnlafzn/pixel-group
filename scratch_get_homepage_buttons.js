const fs = require('fs');

const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';
if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== HOMEPAGE BUTTONS ===');
  
  const btnRegex = /<button[^>]*>([\s\S]*?)<\/button>/gi;
  let match;
  while ((match = btnRegex.exec(html)) !== null) {
    console.log('Button tag:', match[0]);
  }
} else {
  console.log('Content file not found');
}
