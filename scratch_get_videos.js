const https = require('https');

const urls = [
  'https://pixelgroup.id/',
  'https://pixelgroup.id/en/about.html',
  'https://pixelgroup.id/en/services.html',
  'https://pixelgroup.id/en/our-works.html'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
      console.log(`=== MP4 MATCHES IN ${url} ===`);
      const regex = /[^"' ]*\.mp4[^"' ]*/g;
      const matches = html.match(regex);
      console.log(matches ? [...new Set(matches)] : 'None');
    });
  }).on('error', e => console.error(e));
});
