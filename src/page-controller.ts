import { pageScraper } from './page-scraper';

export async function scrapeAll(browserInstance: any): Promise<void> {
  try {
    const browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
}
