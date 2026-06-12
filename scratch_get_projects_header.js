const fs = require('fs');
const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';

if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== OUR PROJECTS HEADER ===');
  
  const startIdx = html.indexOf('<section class="snap-start bg-background min-h-screen py-16">');
  if (startIdx !== -1) {
    // print first 2000 chars of the section
    console.log(html.substring(startIdx, startIdx + 3000));
  } else {
    console.log('Could not find start tag');
  }
} else {
  console.log('File not found');
}
