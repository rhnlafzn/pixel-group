const https = require('https');

https.get('https://pixelgroup.id/en/about.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('=== IMAGES ON ABOUT PAGE ===');
    const imgRegex = /<img[^>]*>/gi;
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[0].toLowerCase().includes('map') || match[0].toLowerCase().includes('pin')) {
        console.log(match[0]);
      }
    }
  });
}).on('error', e => console.error(e));
