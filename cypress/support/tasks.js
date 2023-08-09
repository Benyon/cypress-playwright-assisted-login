const playwright = require('playwright');

const accountInfo = {
  email: 'gotomo7251@tipent.com',
  password: 'Password123'
}

module.exports = {
  async getLoggedInSession() {
    let cookies = [];
    const chrome = await playwright.chromium.launch({ headless: false });
    try {
      const page = await chrome.newPage();
      await page.goto('https://www.boohoo.com/login');
      await page.waitForSelector('#onetrust-accept-btn-handler');
      await page.click('#onetrust-accept-btn-handler');
      await page.type('#dwfrm_login_email', accountInfo.email);
      await page.type('#dwfrm_login_password', accountInfo.password);
      await page.click('[data-tau="login_submit"]');
      await page.waitForSelector('[data-tau="navigation_accountOverview"]');
      cookies = await page.context().cookies();
      await chrome.close()
    } catch (err) {
      await chrome.close()
      throw new Error(err.message)
    }
    return cookies;
  }
}