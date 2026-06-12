const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Rei\\.gemini\\antigravity-ide\\brain\\3726d224-6fb6-445f-b4e1-cdd6cd56a068\\.system_generated\\steps\\62\\content.md', 'utf8');

const fontMatches = content.match(/[^"' ]*\.(woff2|woff|ttf)[^"' ]*/g);
console.log('Font files matches:', fontMatches);

const fontFaceMatches = content.match(/@font-face/g);
console.log('@font-face count:', fontFaceMatches ? fontFaceMatches.length : 0);
