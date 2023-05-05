import { Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page: Page) {
    }

async login(email: string, password: string) {

    await this.enterEmailAddress(email);
    await this.enterLoginPassword(password);
    await  this.clickLoginBtn();
}

async  enterEmailAddress(emailaddress: string) {
    await this.page.locator("input[name='email']").type(emailaddress)
    }
async  enterLoginPassword(password: string) {
    await this.page.locator("input[name='password']").type(password)
    }    

async  clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            await this.page.click("input[value='Login']")
        ])
          
        }  
}