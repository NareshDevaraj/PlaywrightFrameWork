import { test, expect } from '@playwright/test';

test("Select List Demo",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption("#select-demo", {
        // label: "Wednesday"       // using label
        // value: "Monday"          //using value 
         index: 6               //using index 
    });   // click on select dropdown value(by label) using id 
    await page.waitForTimeout(2000)

})

test("Multi Select List Demo",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.locator("#multi-select").scrollIntoViewIfNeeded();  //if user wants to scroll for screenshot

    await page.selectOption("#multi-select", [              //selecting multiple value in a dropdown
    {    label: "California"       // using label
    }, {
         value: "Florida"          //using value 
    }, {    
         index: 6               //using index 
    }
    ])   // click on select dropdown value(by label) using id 
    
    await page.waitForTimeout(2000)
    
})

test("Bootstrap Dropdown - Single Select - Search and Select country",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span");        // clicking the dropdown
    await page.locator("ul#select2-country-results")     // picking the class name of the tab has country list
            .locator("li", {                       // adding condition to move to list by li
            hasText: "India"                                 //selecting using text    
        }).click();

   await page.waitForTimeout(3000) 

})

test("Bootstrap Dropdown - Single Select - Search and Select country using common function",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await selectCountry("Netherlands");   //providing multiple values 
    await selectCountry("Hong Kong");
    await selectCountry("Australia");
    
async function selectCountry(CountryName) {
    await page.click("#country+span");        // clicking the dropdown
    await page.locator("ul#select2-country-results")     // picking the class name of the tab has country list
            .locator("li", {                       // adding condition to move to list by li
            hasText: CountryName                                 //selecting using text    
        }).click();

}

    
   await page.waitForTimeout(3000) 

})