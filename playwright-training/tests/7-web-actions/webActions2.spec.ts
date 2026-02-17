import {test, expect,chromium } from '@playwright/test';

test ('Validating Demoqa Application', async ({ }) =>{

//Launch the browser window (Chrome)
    const browser = await chromium.launch({headless:true, channel:'chrome'});

    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();

    //Create a new page in the browser context.
    const page = await context.newPage();

    //Maximize the browser window to a specific resolution. 
    await page.setViewportSize({width:1920,height:1080});

    //Clear all cookies
    await context.clearCookies();

    //Enter URL "https://demoqa.com/" and launch the application. 
    await page.goto('https://demoqa.com/');

    //Verify the application title. 
    await expect(page).toHaveTitle('demosite');

    // Navigate to Forms → Practice Form
    await page.getByText('Forms').click();
    await page.getByText('Practice Form').click();

    //Verify Heading
    let heading = page.getByRole('heading', {name:'Practice Form'});
    
    //Wait for Page-load
    await page.waitForTimeout(3000);

    //Enter First name and Last name 
    await page.locator('//input[@id="firstName"]').fill('Manoj');

    await page.locator('//input[@id="lastName"]').fill('Kumar');

    //Enter Email
    await page.locator('//input[@id="userEmail"]').fill('abcd@gmail.com');

    //Selecting Gender (Male)
    await page.locator('//input[@value="Male"]').check();

    //Entering Mobile number
    await page.locator('//input[@id="userNumber"]').fill('7885961236');

   //Selecting DOB (1-Feb-1991) 
    //await page.locator('#dateOfBirthInput').click();
    //await page.locator('.react-datepicker__month-select').selectOption('1');
    //await page.locator('.react-datepicker__year-select').selectOption('1991');
    //await page.locator('.react-datepicker__day--001').click();    
    


    //Search and Select Computer Science
     await page.locator('//input[@id="subjectsInput"]').fill('Computer Science');
     await page.keyboard.press('Enter');


    //Select Hobbies as Sports and Reading    
    await page.locator('//input[@id="hobbies-checkbox-1"]').check();//sports
    await page.locator('//input[@id="hobbies-checkbox-2"]').check();//Reading

    //uploading photo
    await page.locator('//input[@id="uploadPicture"]').setInputFiles('C:\\Users\\DEll\\Desktop\\test.png');
    
    // Wait till file upload
     await page.waitForTimeout(4000);

    // Submit Details
    await page.locator('#submit').click();

    // Verify submission modal
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

    //Closing browser
    await browser.close();

});
                                             
