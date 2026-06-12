const https = require('https');

const urls = [
  'https://pixelgroup.id/video/dot-wave-16x10-c.mp4',
  'https://pixelgroup.id/video/dot-abstract-c.mp4',
  'https://pixelgroup.id/video/wave-3d-c.mp4',
  'https://pixelgroup.id/video/dot-wave-c.mp4',
  'https://pixelgroup.id/video/dot-wave.mp4',
  'https://pixelgroup.id/video/dot-abstract.mp4',
  'https://pixelgroup.id/video/wave-3d.mp4',
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url} -> ${res.statusCode} (${res.headers['content-type']})`);
  }).on('error', (e) => {
    console.error(`Error for ${url}:`, e);
  });
});
