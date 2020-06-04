const puppeteer = require('puppeteer');


console.log('hello')

const sku = '555088 041';

const getFlightPrice = async () => {
    const sku = '555088 041';
    const browser = await puppeteer.launch(
        { 
            dataDir: ('./data'),
            headless: false,
        }
    );

    console.log('function');

    const page = await browser.newPage();
    await page.setViewport({
        width: 1680,
        height: 920,

    });
    await page.goto('https://www.flightclub.com/', { waitUntil: 'networkidle2'});
    const searchInput = await page.$('.gqsQfF');
    await searchInput.type(sku);
    await page.keyboard.press('Enter');

    await page.waitFor(10000);
    await browser.close();

};

(async () => {
    
    const browser = await puppeteer.launch(
        { 
            dataDir: ('./data'),
            headless: false,
        }
    );

    console.log('function');

    const page = await browser.newPage();
    await page.setViewport({
        width: 1680,
        height: 920,

    });
    await page.goto('https://stockx.com/', { waitUntil: 'networkidle2'});
    const searchInput = await page.$('#home-search');
    await searchInput.type(sku);
    await page.keyboard.press('Enter');
    await page.click('.ftvbug');

    await page.waitFor(10000);
    await browser.close();

})();
