 import { expect, test } from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json"

//test.use({
  //  browserName: "firefox"
//})

test.describe("Test based on pageObject Method" , async () => {
    test("Rgister test 01", async ( {page, baseURL , RegisterPage} ) => {
        //const register = new registerPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await RegisterPage.enterFirstName(data.firstname);
        await RegisterPage.enterLasttName(data.lastname);
        await RegisterPage.enterEmail(data.email); 
        await RegisterPage.enterTelephone(data.phone_number); 
        await RegisterPage.enterPassword(data.password); 
        await RegisterPage.enterConfirmPassword(data.confirmpassword); 
        expect (RegisterPage.isSubscribedChecked()).toBeChecked();
        await RegisterPage.clickTermCondition();
        await RegisterPage.clickContinueToRegister();
        })
          
        
        test("Login test 02", async ( {page, baseURL, loginPage} ) => {
          //  const login = new LoginPage(page);
            await page.goto(`${baseURL}route=account/login`);
            await loginPage.enterEmailAddress(data.email);
            await loginPage.enterLoginPassword(data.password);
            await loginPage.clickLoginBtn();
            expect (await page.title()).toBe("My Account");
            })
        
        test("add to cart 03", async ( {page, baseURL, loginPage , HomePage , MegamenuPage} ) => {
            //const login = new LoginPage(page);
            //const HomePage = new homePage(page);
            //const MegamenuPage = new megamenuPage(page);
            await page.goto(`${baseURL}route=account/login`);
            await loginPage.login(data.email, data.password);   
            await HomePage.megamenuTitle();
            await HomePage.clickOnApple();
            await MegamenuPage.addFirstProductToTheCart();
            const isCartVisible = await MegamenuPage.isToastVisible();
            expect (isCartVisible).toBeVisible();
        
            })    
        


}
)
