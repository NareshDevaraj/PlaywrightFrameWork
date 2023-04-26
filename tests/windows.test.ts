import { test, expect } from '@playwright/test';

test("Interact with single tabs",async ( {page} ) => {
    
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
  console.log(page.url()); 

   //click on follow on twitter button
  const[newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'  Follow On Twitter '")

   ]);

   console.log(newWindow.url());

   //newWindow.fill("", "")              //can do multiple action in new window 

})



test("Interact with multiple tabs",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   // console.log(page.url()); 
  
   await page.waitForLoadState();              // wait for all the url to load
     //click on follow on twitter and facebook button
    const[multiPage] = await Promise.all([
          page.waitForEvent("popup"),
          page.click("#followboth")
  
     ]);
     
     const pages = multiPage.context().pages();
     console.log('No.of tabs' + pages.length);    //to find number of urls
    
     
     await page.waitForLoadState();
     pages.forEach(tab=> {

     console.log(tab.url());     //to print all the open url

    })
     // to find the index value of the page 
     //let facebookPage: Page;
     //for (let index = 0; index < pages.length; index++)   {
     //   const url = pages[index].url()
     //   if(url == "https://www.facebook.com/lambdatest/"){
      //      facebookPage = pages[index];
      //  }
     //}
     //const text = await facebookPage.textContent("//h1")
     //console.log(text)



    // await pages[1].fill("locator", "data to enter")     // to enter value in first url (twitter)


    
   


  
  })