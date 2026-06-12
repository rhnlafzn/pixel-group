const fs = require('fs');
const path = 'C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\2c8fc3ba-e4b5-4498-8613-97874093d1df\\browser';

fs.readdirSync(path).forEach(file => {
  if (file.endsWith('.md')) {
    console.log(`=== FILE: ${file} ===`);
    console.log(fs.readFileSync(path + '/' + file, 'utf8'));
  }
});
