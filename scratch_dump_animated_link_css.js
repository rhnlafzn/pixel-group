const https = require('https');

const url = 'https://pixelgroup.id/_next/static/css/cf52b260a29cdebd.css';
https.get(url, (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    const rules = css.match(/[^{}]+\{[^{}]*\}/g) || [];
    rules.forEach(rule => {
      if (rule.includes('animated-link')) {
        console.log(rule);
      }
    });
  });
}).on('error', e => console.error(e));
