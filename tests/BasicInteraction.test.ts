import{ expect, test } from "@playwright/test"

test("Interaction with single input",async ( {page} ) => {
    
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
const messageInput = page.locator("input#user-message");   //using ID
await messageInput.scrollIntoViewIfNeeded();  //if user wants to scroll for screenshot
console.log(await messageInput.getAttribute("placeholder"));  //validating Single Input Field --> enter message box 
expect (messageInput).toHaveAttribute("placeholder","Please enter your Message"); // validating the text with attribute
console.log('Before entering data' +await messageInput.inputValue());          // to validate and log value display in the message box 

await messageInput.type("Hi Naresh");
console.log('After entering data' +await messageInput.inputValue());          // to validate and log value display in the message box 

    });

test("Interaction with Multiple input",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");
    
    const getValuesBtn = page.getByRole("button").getByText("Get values");
    let num1 = 112;
    let num2 = 876;
    await sum1input.fill("" +num1);  // we can give using string format 
    await sum2input.type("" +num2);  // we can give using string
    await getValuesBtn.click();
    
    const result = page.locator('#addmessage')
    console.log(await result.textContent());   // to validate the result

    let expectedResult = num1 + num2
    expect (result).toHaveText("" + expectedResult);

    }); 


test("Interaction with check Box",async ( {page} ) => {
    
        await page.goto("https://lambdatest.com/selenium-playground/checkbox-demo");
        const singleCheckbox = page.locator("id=isAgeSelected")    // using ID
        expect(singleCheckbox).not.toBeChecked   // validating check box is not checked
        await singleCheckbox.check();    //to click the check box
        expect(singleCheckbox).toBeChecked   // validating check box is checked
    
     }); 