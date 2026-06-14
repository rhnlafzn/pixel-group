const https = require('https');

https.get('https://pixelgroup.id/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('=== LIVE PORTFOLIO DETAILS ===');
    const regex = /<section[^>]*class="[^"]*bg-transparent z-10 isolate min-h-screen[^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
    let match = regex.exec(html);
    if (match) {
      console.log(match[0].substring(0, 2500));
    } else {
      console.log('Not found');
    }
  });
}).on('error', e => console.error(e));
