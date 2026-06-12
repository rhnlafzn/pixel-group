const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.setViewportSize({ width: 1278, height: 1352 });
  
  // Wait for carousel to load
  await page.waitForTimeout(2000);
  
  console.log('=== CHECKING CAROUSEL BUTTONS ===');
  
  // Get all buttons on the page
  const buttons = await page.$$eval('button', btns => btns.map(b => ({
    text: b.textContent.trim(),
    className: b.className,
    disabled: b.disabled,
    visible: b.offsetWidth > 0 && b.offsetHeight > 0,
    rect: b.getBoundingClientRect()
  })));
  
  console.log('Total buttons found:', buttons.length);
  buttons.forEach((b, i) => {
    console.log(`Button ${i}:`);
    console.log(`  Text: "${b.text}"`);
    console.log(`  Class: "${b.className}"`);
    console.log(`  Visible: ${b.visible}`);
    console.log(`  Disabled: ${b.disabled}`);
    console.log(`  Rect: x=${b.rect.x}, y=${b.rect.y}, w=${b.rect.width}, h=${b.rect.height}`);
  });
  
  // Let's get the active slide title
  const getActiveTitle = async () => {
    return await page.$eval('h4', h => h.textContent.trim()).catch(() => 'None');
  };
  
  console.log('Initial Active Title:', await getActiveTitle());
  
  // Click Next button (it's the first visible nav button pointing right)
  // Let's find Next button in the DOM list
  // The mobile buttons have class containing xl:hidden and no rotate-180 for next, rotate-180 for prev
  const nextBtnSelector = 'button:not(.rotate-180):has(svg)';
  const prevBtnSelector = 'button.rotate-180:has(svg)';
  
  try {
    console.log('Clicking Next...');
    await page.click(nextBtnSelector);
    await page.waitForTimeout(1000);
    console.log('Active Title after Next:', await getActiveTitle());
    
    console.log('Clicking Prev...');
    await page.click(prevBtnSelector);
    await page.waitForTimeout(1000);
    console.log('Active Title after Prev:', await getActiveTitle());
  } catch (err) {
    console.error('Error during click:', err);
  }
  
  await browser.close();
})();
