import { test, expect } from '@playwright/test';

test("Handling Alerts  -- Java Script Alert Box",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    // to handle alert we use event listner
    page.on("dialog", async (alert) => {
        const text = alert.message(); //print the alert message 
        console.log(text);
        await alert.accept(); // accept the alert

    })

    await page.locator("button:has-text('Click Me')").nth(0).click();   // using button text  using nth value
    
})


test("Handling Alerts  -- Java Script Confirm Box",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    // to handle alert we use event listner
    page.on("dialog", async (alert) => {
        const text1 = alert.message(); //print the alert message 
        console.log(text1);
        await alert.dismiss(); // to click cancel

    })

    await page.locator("button:has-text('Click Me')").nth(1).click();   // using button text  using nth value
    expect (page.locator("id=confirm-demo")).toContainText("Cancel");
    //or
    expect (page.locator("id=confirm-demo")).toHaveText("You pressed Cancel!");
    
})


test("Handling Alerts  -- Java Script Alert Box with text to be entered",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    // to handle alert we use event listner
    page.on("dialog", async (alert) => {
        const text2 = alert.defaultValue(); //when user enter data in the box
        console.log(text2);
        await alert.accept("Hi Naresh"); // to enter data in text box in alert

    })

    await page.locator("button:has-text('Click Me')").nth(2).click();   // using button text  using nth value
    expect (page.locator("id=prompt-demo")).toContainText("Hi Naresh'");
    //or
    expect (page.locator("id=prompt-demo")).toHaveText("You have entered 'Hi Naresh' !");
    
})


test("Handling Alerts  --Bootstrap Modal Example for Automation",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("button:has-text('Launch Modal')").nth(0).click();  // click on
    await page.locator('//*[@id="myModal"]/div/div/div[3]/button[2]').click();  // click on save changes button in alert 

    
})

test("Handling Alerts  --Bootstrap Multiple Modal Example for Automation",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("button:has-text('Launch Modal')").nth(1).click();  // click on
    await page.locator("button:has-text('Launch Modal')").nth(2).click();  // click on
    await page.locator('//*[@id="mySecondModal"]/div/div/div[3]/button[2]').click();  // click on save changes button in alert 

    
})