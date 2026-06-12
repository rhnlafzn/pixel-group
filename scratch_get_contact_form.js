const https = require('https');

https.get('https://pixelgroup.id/en/contact-us.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('=== CONTACT US FORM ===');
    const formRegex = /<form[^>]*>([\s\S]*?)<\/form>/gi;
    const match = formRegex.exec(data);
    if (match) {
      console.log(match[0]);
    } else {
      console.log('No form found');
    }
  });
}).on('error', e => console.error(e));
