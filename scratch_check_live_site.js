const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching homepage...');
    const html = await get('https://pixelgroup.id/en');
    
    // Find stylesheets
    const cssUrls = [];
    const cssRegex = /href="([^"]+\.css[^"]*)"/g;
    let match;
    while ((match = cssRegex.exec(html)) !== null) {
      let url = match[1];
      if (!url.startsWith('http') && !url.startsWith('https')) {
        if (url.startsWith('/')) {
          url = 'https://pixelgroup.id' + url;
        } else {
          url = 'https://pixelgroup.id/' + url;
        }
      }
      cssUrls.push(url);
    }
    
    console.log('Found CSS URLs:', cssUrls);
    
    // Check clients/marquee section HTML children
    console.log('\n=== Clients Section Direct Children ===');
    const clientsRegex = /<section[^>]*class="[^"]*(?:marquee|client|our-client|py-\[158px\])[^"]*"[^>]*>([\s\S]*?)<\/section>/i;
    const clientsMatch = clientsRegex.exec(html);
    if (clientsMatch) {
      const sectionHtml = clientsMatch[0];
      // Let's use a regex to match direct child tags or just divs with order classes
      const childDivs = sectionHtml.match(/<div[^>]*class="[^"]*"[^>]*>/gi) || [];
      console.log(`Found ${childDivs.length} divs:`);
      for (const div of childDivs) {
        // Only print divs that are direct children or have important layout classes
        if (div.includes('order-') || div.includes('marquee') || div.includes('container') || div.includes('my-') || div.includes('mx-') || div.includes('py-')) {
          console.log('Div tag:', div);
        }
      }
    }
    
    // Check portfolio section HTML
    console.log('\n=== Searching for Portfolio Section in HTML ===');
    const portfolioSecRegex = /<section[^>]*class="[^"]*(?:portfolio|works)[^"]*"[^>]*>([\s\S]*?)<\/section>/i;
    const portfolioMatch = portfolioSecRegex.exec(html);
    if (portfolioMatch) {
      console.log('Found Portfolio section HTML segment:');
      console.log(portfolioMatch[0].substring(0, 500));
    }
    
    // Find button containing CONNECT or READ MORE
    console.log('\n=== Searching for Buttons/Links SVG in HTML ===');
    const linksRegex = /<a[^>]*>([\s\S]*?)<\/a>/gi;
    let linkMatch;
    while ((linkMatch = linksRegex.exec(html)) !== null) {
      const outerHtml = linkMatch[0];
      if (outerHtml.toUpperCase().includes('CONNECT') || outerHtml.toUpperCase().includes('READ MORE')) {
        console.log('Button/Link HTML (with SVG):');
        console.log(outerHtml);
      }
    }
    
    // Fetch and search CSS files for .animated-link, marquee, and portfolio classes
    for (const cssUrl of cssUrls) {
      console.log(`\nFetching CSS from: ${cssUrl}`);
      const css = await get(cssUrl);
      
      const targets = [
        'animated-link',
        'marquee',
        'portfolio',
        'swiper',
        'our-clients',
        'client'
      ];
      
      console.log(`Searching in CSS...`);
      // Find rules for .animated-link
      const lines = css.split('\n');
      let foundAnimatedLink = false;
      
      // We can search for animated-link using regex
      // Search for any CSS rules containing .animated-link
      const animLinkAllRegex = /\.animated-link[^{,]*\{[^}]*\}/g;
      let animMatch;
      while ((animMatch = animLinkAllRegex.exec(css)) !== null) {
        console.log('Animated Link CSS rule:', animMatch[0]);
      }
      
      const animLinkCommaRegex = /\.animated-link[^{]*\{[^}]*\}/g;
      while ((animMatch = animLinkCommaRegex.exec(css)) !== null) {
        if (!animMatch[0].includes('.animated-link ')) {
          console.log('Animated Link (complex/comma):', animMatch[0]);
        }
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
