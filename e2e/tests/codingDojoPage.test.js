import expect from 'expect';

import { appUrlBase, getBrowser, mainNavigationSelectors } from '../utils';

let browser;
let page;

beforeAll(async () => {
    browser = await getBrowser();
    page = await browser.newPage();
    await page.goto(appUrlBase);
    await page.click(mainNavigationSelectors.dojo);
    await page.waitForSelector('#dojoContent');
});

describe('The Dojo page', () => {
    test('it should display "Le Dojo"', async () => {
        const hello = await page.evaluate(
            () => document.querySelector('#dojoContent h1').textContent,
        );
        expect(hello).toContain('Le Dojo');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
