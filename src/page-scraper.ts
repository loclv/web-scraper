import { URL } from '@utils';
import { Browser } from 'puppeteer';

import { pagePromise } from './per-page';

export const pageScraper = {
  url: URL,
  async scraper(browser: Browser): Promise<void> {
    const page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    // Wait for the required DOM to be rendered
    await page.waitForSelector('.page_inner');
    // Get the link to all the required books
    const urls: any = await page.$$eval(
      'section ol > li',
      (links: Document[]) => {
        let filteredLinks: Document[];
        // Make sure the book to be scraped is in stock
        filteredLinks = links.filter(
          (link: any) =>
            link.querySelector('.instock.availability > i').textContent !==
            'In stock'
        );
        // Extract the links from the data
        filteredLinks = filteredLinks.map(
          (el: any) => el.querySelector('h3 > a').href
        );
        return filteredLinks;
      }
    );

    for (const link in urls) {
      if (!urls[link]) {
        continue;
      }
      const currentPageData = await pagePromise(urls[link], browser);

      console.log(currentPageData);
    }
    console.log(urls);
  },
};
