import { Browser, ElementHandle } from 'puppeteer';

// Loop through each of those links, open a new page instance and get the relevant data from them
export const pagePromise = async (
  link: string,
  browser: Browser
): Promise<{ [key: string]: ElementHandle<string> }> => {
  const dataObj: { [key: string]: ElementHandle<string> } = {};

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
