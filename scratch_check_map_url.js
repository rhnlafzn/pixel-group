const https = require('https');

const url = 'https://pixelgroup.id/uploads/about-us/New-map-with-blue-pin-point.png';
https.get(url, (res) => {
  console.log(`${url} -> ${res.statusCode} (${res.headers['content-type']})`);
}).on('error', e => console.error(e));
