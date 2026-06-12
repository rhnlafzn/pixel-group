const fs = require('fs');
const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\.system_generated\\steps\\85\\content.md';

if (fs.existsSync(path)) {
  const html = fs.readFileSync(path, 'utf8');
  const lines = html.split('\n');
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes('projects')) {
      console.log(`Line ${index}:`);
      console.log(line.trim());
    }
  });
} else {
  console.log('File not found');
}
