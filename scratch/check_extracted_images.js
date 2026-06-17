const fs = require('fs');
const path = require('path');

const dir = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group\\extracted_images";
const files = fs.readdirSync(dir);

console.log(`Total extracted files: ${files.length}`);

// Print files containing 'img_1' to see if there are any specific matches
const matches = files.filter(f => f.includes('140') || f.includes('152') || f.includes('1503') || f.includes('1087') || f.includes('103839'));
console.log("Matches:", matches);
