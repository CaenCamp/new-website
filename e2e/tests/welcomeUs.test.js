import expect from 'expect';

import { appUrlBase, getBrowser, mainNavigationSelectors } from '../utils';

let browser;
let page;

beforeAll(async () => {
    browser = await getBrowser();
    page = await browser.newPage();
    await page.goto(appUrlBase);
    await page.click(mainNavigationSelectors.welcomeUs);
    await page.waitForSelector('#welcomeUsContent');
});

describe('Welcome Us page', () => {
    test('it should display "Accueillez nous"', async () => {
        const hello = await page.evaluate(
            () => document.querySelector('#welcomeUsContent h1').textContent,
        );
        expect(hello).toContain('Accueillez nous');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
