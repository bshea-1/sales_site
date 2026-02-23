const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
  });
  const page = await context.newPage();
  try {
    await page.goto('https://www.ashleyfurniture.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Try to get the logo SVG
    const svg = await page.evaluate(() => {
      const logo = document.querySelector('a.brand-logo svg');
      if (logo) return logo.outerHTML;
      const anyLogo = document.querySelector('.logo svg');
      if (anyLogo) return anyLogo.outerHTML;
      const firstSvg = [...document.querySelectorAll('svg')].find(s => s.innerHTML.includes('f88d2a'));
      return firstSvg ? firstSvg.outerHTML : null;
    });
    console.log(svg);
  } catch(e) { console.error(e); }
  await browser.close();
})();
