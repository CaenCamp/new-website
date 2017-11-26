import expect from 'expect';

import { appUrlBase, getBrowser, mainNavigationSelectors } from '../utils';

let browser;
let page;

beforeAll(async () => {
    browser = await getBrowser();
    page = await browser.newPage();
    await page.goto(appUrlBase);
    await page.click(mainNavigationSelectors.callForPaper);
    await page.waitForSelector('#callForPaperContent');
});

describe('Call For Paper page', () => {
    test('it should display "Participez !"', async () => {
        const hello = await page.evaluate(
            () => document.querySelector('#callForPaperContent h1').textContent,
        );
        expect(hello).toContain('Participez !');
    });
});

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
});
