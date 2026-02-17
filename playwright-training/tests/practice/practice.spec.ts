import {test, expect, chromium} from '@playwright/test';

test('Browser actions', async () => {

    //Launch the browser window (Chrome)
    const browser = await chromium.launch({headless:true, channel:'chrome'}); //msedge for edge //, args: ['--start-maximized']

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Maximize the browser window to a specific resolution. 
    await page.setViewportSize({width:1920,height:1080});

    //Clear all cookies
    await context.clearCookies();

    //Enter URL "https://www.google.com/" and launch the application. 
    await page.goto('https://www.google.com/');

    //Verify the application title. 
    await expect(page).toHaveTitle('Google');

    //Launch the new application "https://demoqa.com/" within the same page. 
    await page.goto('https://demoqa.com/');

   //explicit wait
   await page.waitForTimeout(5000);  

   //getByRole
    page.getByRole('heading', {name:'Practice Form'});

  //getByLabel
  page.getByLabel('Email');

  //getByText
  page.getByText('Goat');

});
//ul[class="leftmenu"] >li>a[href="about.htm"] = tree traves from parent to find CSS
//1.getByRole
//2.getByLabel
//3.getByText
//4.getByPlaceholder
//5.getByAltText
//6.getByTitle
//7.getByTestId
//8.locator (css)
//9.locator (xpath)

