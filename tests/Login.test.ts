import { chromium, test } from "@playwright/test"



test("Login test demo", async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");

    //click my acount link (Mouse over)
    const MyAccount = page.getByRole('button', { name: ' My account' }); //using role 
    await MyAccount.hover();
    //await page.click("text=Login");  //Using the text
    await page.click("'Login'");  // can use text like this as well


    //Entering User ID and Password 
    await page.fill("input[name='email']", "koushik350@gmail.com") //entering text method 1
    await page.fill("input[name='password']", "Pass123$") 
    //await page.getByTestId('input-password').type('Pass123'); //entering text method 2
    await page.click("input[value='Login']"); //clicking login button
await page.close();
await context.close();
await browser.close();

   
   
   
   
   
    /* await page.waitForTimeout(3000);
    
    // to navigate to the new tab with existing session 
    const page1 = await context.newPage();
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page.waitForTimeout(3000);  // wait is to validate


    // to navigate with new tab with new session 
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page.waitForTimeout(3000);  // wait is to validate */

})