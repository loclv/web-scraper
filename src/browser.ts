import * as dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

console.log('🌄 Hello!');

console.log('DB_USER: ', process.env.DB_USER);

export const startBrowser = async () => {
  let browser;
  try {
    console.log('Opening the browser......');
    browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log('Could not create a browser instance => : ', err);
  }
  return browser;
};
