const https = require('https');

https.get('https://pixelgroup.id/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find all stylesheet links
    const cssRegex = /href="([^"]*\.css)"/g;
    let match;
    const cssLinks = [];
    while ((match = cssRegex.exec(html)) !== null) {
      cssLinks.push(match[1]);
    }
    
    console.log('CSS Links found:', cssLinks);
    
    cssLinks.forEach(link => {
      const url = link.startsWith('http') ? link : `https://pixelgroup.id/${link.replace(/^\//, '')}`;
      https.get(url, (cRes) => {
        let css = '';
        cRes.on('data', chunk => css += chunk);
        cRes.on('end', () => {
          console.log(`=== CSS FROM ${link} ===`);
          const rules = css.match(/[^{}]+\{[^{}]*\}/g) || [];
          rules.forEach(rule => {
            if (rule.includes('animated-link') || rule.includes('icon') || rule.includes('translateY') || rule.includes('icon-wrapper')) {
              console.log(rule.replace(/\s+/g, ' ').trim());
            }
          });
        });
      });
    });
  });
}).on('error', e => console.error(e));
