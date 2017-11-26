import expect from 'expect';

import { appUrlBase, getBrowser, mainNavigationSelectors } from '../utils';

let browser;
let page;

beforeAll(async () => {
    browser = await getBrowser();
    page = await browser.newPage();
    await page.goto(appUrlBase);
    await page.click(mainNavigationSelectors.talks);
    await page.waitForSelector('#talksContent');
});

describe('Talks page', () => {
    test('it should display "Tous les talks"', async () => {
        const hello = await page.evaluate(
            () => document.querySelector('#talksContent h1').textContent,
        );
        expect(hello).toContain('Tous les talks');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
