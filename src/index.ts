import { startBrowser } from './browser';
import { scrapeAll } from './page-controller';

// Start the browser and create a browser instance
const browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scrapeAll(browserInstance);
