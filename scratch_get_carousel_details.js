const fs = require('fs');

const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';
if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== CAROUSEL ON HOMEPAGE ===');
  
  // Search for carousel structure
  const regex = /<div[^>]*carousel[^>]*>([\s\S]*?)<\/div>/gi;
  let match = regex.exec(html);
  if (match) {
    console.log('Found carousel container:', match[0]);
  } else {
    // Search for buttons near portfolio
    const btnRegex = /<button[^>]*>([\s\S]*?)<\/button>/gi;
    let btnMatch;
    while ((btnMatch = btnRegex.exec(html)) !== null) {
      if (btnMatch[0].includes('svg') || btnMatch[0].includes('prev') || btnMatch[0].includes('next')) {
        console.log('Button:', btnMatch[0]);
      }
    }
  }
} else {
  console.log('Content file not found');
}
