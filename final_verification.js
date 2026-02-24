const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the app
  await page.goto('file://' + process.cwd() + '/index.html');

  // Take a screenshot
  await page.screenshot({ path: 'final_verification.png', fullPage: true });

  console.log('Final screenshot saved to final_verification.png');

  // Check if Login and Register buttons are present
  const loginVisible = await page.isVisible('#loginBtn');
  const registerVisible = await page.isVisible('#registerBtn');

  console.log('Login Button visible:', loginVisible);
  console.log('Register Button visible:', registerVisible);

  if (!loginVisible || !registerVisible) {
    console.error('Login or Register buttons not found!');
    process.exit(1);
  }

  await browser.close();
})();
