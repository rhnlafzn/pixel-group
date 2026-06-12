const https = require('https');

const paths = [
  '/uploads/hero_b6567a13bd.mp4',
  '/video/hero_b6567a13bd.mp4',
  '/video/dot-wave-16x10-c.mp4',
  '/uploads/large_hero_b6567a13bd.mp4',
  '/video/hero.mp4',
  '/uploads/hero.mp4'
];

paths.forEach(p => {
  const url = `https://pixelgroup.id${p}`;
  https.get(url, (res) => {
    console.log(`${url} -> ${res.statusCode}`);
  }).on('error', e => console.error(e));
});
