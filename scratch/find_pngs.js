const fs = require('fs');
const path = require('path');

function findPngs(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        results = results.concat(findPngs(fullPath));
      }
    } else if (file.toLowerCase().endsWith('.png')) {
      results.push({ path: fullPath, size: stat.size });
    }
  });
  return results;
}

const workspace = "c:\\Users\\Rei\\Documents\\IDEA\\pixel-group";
const pngs = findPngs(workspace);
console.log("All PNGs found:", pngs);
