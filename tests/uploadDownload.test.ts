import { test, expect } from '@playwright/test';

test("Download File",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
  
    await page.type("#textbox", "Hi Anto");    //finding text area and type Hi Naresh
    await page.click("#create");   
    
    // to vaidate the download file 
    const download = await Promise.all([
    page.waitForEvent("download"),    
    await page.click("id=link-to-download")                   //click download button
   // wait is to validate
])

//await download[0];   menthod1


//const path = await download[0].path();      //picking first document //method 2
//console.log(path);


const FileName = download[0].suggestedFilename()   //download and open the file 
await download[0].saveAs(FileName);

})


test("Upload File",async ( {page} ) => {
    
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
   
    await page.setInputFiles("//input[@type='file']" , 
    ["uploaditems/car1.png", "uploaditems/car2.jpeg"]             //adding multiple document(it can multiple document only if it has tag multiple)
    )

})


test("Upload File method 2 ",async ( {page} ) => {
    
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
   
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser") ,              //will wait for upload window to open
        page.click("//input[@type='file']")
    ])

    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);                                // to validate the tag is having multiple or single file 

    uploadFiles.setFiles(
        ["uploaditems/car1.png", "uploaditems/car2.jpeg"]         //upload multiple files 
    )

    await page.waitForTimeout(3000); 
})
