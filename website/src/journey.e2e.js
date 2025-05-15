import puppeteer from "puppeteer";

import app from "../index.js";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe( "User journey", () =>
{
    let browser = null;
    let page    = null;

    beforeAll( async () =>
    {
        browser = await puppeteer.launch();
        page    = await browser.newPage();

        await page.setViewport({ width : 1366, height : 768 });
        await page.goto( app.frontend.tests.getE2ELocation() );
    });

    it( "Land on a homepage", async () =>
    {
        const titleSelector = await page.locator( "h1" ).waitHandle();
        const titleText     = await titleSelector?.evaluate( el => el.textContent );

        expect( titleText ).toBe( "Eigen UI" );
    });

    it( "Visit about page", async () =>
    {
        await page.locator( "turbo-button[data-path=\"/\"] >>> a" ).click();
        await page.waitForNavigation();

        const aboutSelector = await page.locator( "main h2" ).waitHandle();
        const aboutTitle    = await aboutSelector?.evaluate( el => el.textContent );

        expect( aboutTitle ).toBe( "About Eigen UI" );
    });

    it( "Go back to the homepage", async () =>
    {
        await page.locator( "turbo-button[data-path=\"/about/\"] >>> a" ).click();
        await page.waitForNavigation();

        const titleSelector = await page.locator( "h1" ).waitHandle();
        const titleText     = await titleSelector?.evaluate( el => el.textContent );

        expect( titleText ).toBe( "Eigen UI" );
    });

    afterAll( async () =>
    {
        await browser.close();
    });
});

