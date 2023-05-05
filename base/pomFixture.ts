import { test as baseTest } from "@playwright/test";
import registerPage from "../pageObjectMethod/registerPage"
import LoginPage from "../pageObjectMethod/loginPage"
import megamenuPage from "../pageObjectMethod/megamenuPage"
import homePage from "../pageObjectMethod/homePage";



type pages = {
    RegisterPage: registerPage;
    loginPage: LoginPage;
    MegamenuPage: megamenuPage;
    HomePage: homePage

}

const testPages = baseTest.extend<pages>({

    RegisterPage: async ({ page }, use) => {
        await use(new registerPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    MegamenuPage: async ({ page }, use) => {
        await use(new megamenuPage(page));
    },
    HomePage: async ({ page }, use) => {
        await use(new homePage(page));
    }


})

export const test = testPages;
export const expect = testPages.expect;