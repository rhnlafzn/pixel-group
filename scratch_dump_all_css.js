const https = require('https');

https.get('https://pixelgroup.id/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const cssRegex = /href="([^"]*\.css)"/g;
    let match;
    const cssLinks = [];
    while ((match = cssRegex.exec(html)) !== null) {
      cssLinks.push(match[1]);
    }
    
    cssLinks.forEach(link => {
      const url = link.startsWith('http') ? link : `https://pixelgroup.id/${link.replace(/^\//, '')}`;
      https.get(url, (cRes) => {
        let css = '';
        cRes.on('data', chunk => css += chunk);
        cRes.on('end', () => {
          const rules = css.match(/[^{}]+\{[^{}]*\}/g) || [];
          rules.forEach(rule => {
            const lower = rule.toLowerCase();
            if (lower.includes('.icon') && !lower.includes('icon-wrapper')) {
              console.log(`[${link}] ${rule.replace(/\s+/g, ' ').trim()}`);
            }
          });
        });
      });
    });
  });
}).on('error', e => console.error(e));
