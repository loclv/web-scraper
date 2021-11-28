import { Browser } from 'puppeteer';

export const pageScraper = {
  url: 'http://books.toscrape.com',
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

    // Loop through each of those links, open a new page instance and get the relevant data from them
    const pagePromise = async (link: string) => {
      const dataObj: any = {};

      const newPage = await browser.newPage();

      await newPage.goto(link);

      dataObj.bookTitle = await newPage.$eval(
        '.product_main > h1',
        (text: any): string => text.textContent
      );

      dataObj.bookPrice = await newPage.$eval(
        '.price_color',
        (text: any): string => text.textContent
      );

      dataObj.noAvailable = await newPage.$eval(
        '.instock.availability',
        (text: any): string => {
          // Strip new line and tab spaces
          const newText = text.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, '');
          // Get the number of stock available
          const regexp = /^.*\((.*)\).*$/i;

          const regexText = regexp.exec(newText);
          if (!regexText) {
            return '';
          }

          const stockAvailable = regexText.toString().split(' ')[0];
          return stockAvailable;
        }
      );

      dataObj.imageUrl = await newPage.$eval(
        '#product_gallery img',
        (img: any): string => img.src
      );

      dataObj.bookDescription = await newPage.$eval(
        '#product_description',
        (div: any): string => div.nextSibling.nextSibling.textContent
      );

      dataObj.upc = await newPage.$eval(
        '.table.table-striped > tbody > tr > td',
        (table: any): string => table.textContent
      );

      await newPage.close();

      return new Promise((resolve) => {
        resolve(dataObj);
      });
    };

    for (const link in urls) {
      if (!urls[link]) {
        continue;
      }
      const currentPageData = await pagePromise(urls[link]);

      console.log(currentPageData);
    }
    console.log(urls);
  },
};
