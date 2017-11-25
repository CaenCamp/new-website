import puppeteer from 'puppeteer';
import expect from 'expect';

const appUrlBase = process.env.CAENCAMP_TEST_SERVER || 'http://localhost:9000';
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
    test('it should display Welcome', async () => {
        await page.goto(routes.home);
        await page.waitForSelector('.welcome');
        const hello = await page.evaluate(
            () => document.querySelector('.welcome').textContent,
        );
        expect(hello).toContain('Welcome to our new website.');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
