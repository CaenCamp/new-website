import puppeteer from 'puppeteer';

export const appUrlBase =
    process.env.CAENCAMP_TEST_SERVER || 'http://localhost:9000';

export const getBrowser = async () => {
    return await puppeteer.launch(
        process.env.DEBUG
            ? {
                  headless: false,
                  slowMo: 100,
              }
            : { args: ['--no-sandbox'] },
    );
};

export const mainNavigationSelectors = {
    callForPaper: 'a.linkToCallForPaper',
    dojo: 'a.linkToCodingDojo',
    home: '#mainLogo',
    talks: 'a.linkToTalks',
    welcomeUs: 'a.linkToWelcomeUs',
};
