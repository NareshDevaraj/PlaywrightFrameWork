 import { expect, test } from "@playwright/test";
import RegisterPage from "../pageObjectMethod/registerPage"
import LoginPage from "../pageObjectMethod/loginPage"
import megamenuPage from "../pageObjectMethod/megamenuPage"
import homePage from "../pageObjectMethod/homePage";


const email = "Anto1234@gmail.com";
const password = "Anto@1234";
const confirmpassword = "Anto@1234";

test.describe("Test based on pageObject Method" , async () => {
    test("Rgister test 01", async ( {page, baseURL} ) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Anto");
        await register.enterLasttName("Anto");
        await register.enterEmail(email); 
        await register.enterTelephone("123456789"); 
        await register.enterPassword(password); 
        await register.enterConfirmPassword(confirmpassword); 
        expect (register.isSubscribedChecked()).toBeChecked();
        await register.clickTermCondition();
        await register.clickContinueToRegister();
        })
          
        
        test("Login test 02", async ( {page, baseURL} ) => {
            const login = new LoginPage(page);
            await page.goto(`${baseURL}route=account/login`);
            await login.enterEmailAddress(email);
            await login.enterLoginPassword(password);
            await login.clickLoginBtn();
            expect (await page.title()).toBe("My Account");
            })
        
        test("add to cart 03", async ( {page, baseURL} ) => {
            const login = new LoginPage(page);
            const HomePage = new homePage(page);
            const MegamenuPage = new megamenuPage(page);
            await page.goto(`${baseURL}route=account/login`);
            await login.login(email, password);   
            await HomePage.megamenuTitle();
            await HomePage.clickOnApple();
            await MegamenuPage.addFirstProductToTheCart();
            const isCartVisible = await MegamenuPage.isToastVisible();
            expect (isCartVisible).toBeVisible();
        
            })    
        


}
)
