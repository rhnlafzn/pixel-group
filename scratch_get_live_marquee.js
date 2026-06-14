const https = require('https');

https.get('https://pixelgroup.id/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('=== CLIENT MARQUEE NESTING ===');
    const regex = /<section[^>]*class="[^"]*py-\[158px\][^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
    let match = regex.exec(html);
    if (match) {
      // Find all divs in the section
      const content = match[1];
      let divMatch;
      const divRegex = /<div[^>]*>/gi;
      while ((divMatch = divRegex.exec(content)) !== null) {
        console.log(divMatch[0]);
      }
    } else {
      console.log('Not found');
    }
  });
}).on('error', e => console.error(e));
