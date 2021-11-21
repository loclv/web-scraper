export const pageScraper = {
  url: 'http://books.toscrape.com',
  async scraper(browser: any) {
    const page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
  },
};
