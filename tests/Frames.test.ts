import { test, expect } from '@playwright/test';

test("Interact with frames",async ( {page} ) => {
    
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);
   
    //to navigate to first frame 
    const myFrame = page.frame("firstFr")    //using name 
    //if (myFrame != null) {     //if we are not using ? after iframe like below
      //  await myFrame.fill("","")
    //}

    await myFrame?.fill("input[name='fname']", "Naresh")      //using name and fill the data as Naresh
    await myFrame?.fill("input[name='lname']", "Kumar")       // entering last name
   
    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered Naresh Kumar")

    await page.waitForTimeout(3000)
    
})


test("Interact with frames menthod 2 and inner frame",async ( {page} ) => {
    
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);
   
    const Frame =page.frameLocator("[src='frameUI']")     //using css
    await Frame.locator("input[name='fname']").fill("Naresh")  
    await Frame.locator("input[name='lname']").fill("Kumar")  
    expect(await Frame.locator("p.has-text-info").textContent()).toContain("You have entered Naresh Kumar")


    // To find the inner frame 
    const innerFrame = Frame.frameLocator("iframe[src='innerFrame']")    //using css
    await innerFrame.locator("input[name='email']").fill("abc@gmail.com")

    await page.waitForTimeout(3000)
    
})