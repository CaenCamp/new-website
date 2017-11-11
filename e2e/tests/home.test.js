import puppeteer from 'puppeteer';
import expect from 'expect';

const appUrlBase = 'http://website:9000';
const routes = {
    home: appUrlBase,
};

let browser;
let page;
beforeAll(async () => {
    browser = await puppeteer.launch(
        process.env.DEBUG
            ? {
                  headless: false,
                  slowMo: 100,
              }
            : { args: ['--no-sandbox'] },
    );
    page = await browser.newPage();
});

describe('home page', () => {
    test('it should display Hello CaenCamp!', async () => {
        await page.goto(routes.home);
        await page.screenshot({ path: 'example.png' });
        await page.waitForSelector('#hello');
        const hello = await page.evaluate(() => document.querySelector('#hello').textContent);
        expect(hello).toEqual('Hello CaenCamp!');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
