const fs = require('fs');
const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';

if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== SECTIONS CONTAINING PROJECTS OR SOLUTION ===');
  
  // Find all sections or divs with text content
  const regex = /<section[^>]*>([\s\S]*?)<\/section>/gi;
  let match;
  let index = 0;
  while ((match = regex.exec(html)) !== null) {
    const sectionText = match[0].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`Section ${index}:`);
    console.log(`Full text: ${sectionText.substring(0, 300)}...`);
    if (match[0].toLowerCase().includes('projects')) {
      console.log('--- CONTAINS PROJECTS ---');
      console.log(match[0].substring(0, 1000));
    }
    index++;
  }
} else {
  console.log('File not found');
}
