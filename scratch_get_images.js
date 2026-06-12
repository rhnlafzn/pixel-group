const https = require('https');

const pages = [
  'https://pixelgroup.id/en.html',
  'https://pixelgroup.id/en/about.html',
  'https://pixelgroup.id/en/services.html',
  'https://pixelgroup.id/en/our-works.html',
  'https://pixelgroup.id/en/contact-us.html'
];

pages.forEach(page => {
  https.get(page, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`=== IMAGES ON ${page} ===`);
      const imgRegex = /<img[^>]*>/gi;
      let match;
      while ((match = imgRegex.exec(data)) !== null) {
        console.log(match[0]);
      }
    });
  }).on('error', e => console.error(e));
});
