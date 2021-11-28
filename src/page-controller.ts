import { Browser } from 'puppeteer';

import { pageScraper } from './page-scraper';

export async function scrapeAll(
  browserInstance: Promise<Browser | undefined>
): Promise<void> {
  try {
    const browser = await browserInstance;

    if (!browser) {
      console.log('Could not resolve the browser instance!');
      return;
    }
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
}
