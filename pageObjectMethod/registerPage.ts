import { Page } from "@playwright/test";

export default class registerPage{

    constructor(public page: Page) {
    }

async  enterFirstName(firstName: string) {
     await this.page.locator("#input-firstname").type(firstName)
    }
async  enterLasttName(lastName: string) {
     await this.page.locator("#input-lastname").type(lastName)
    }

async  enterEmail(email: string) {
        await this.page.locator("#input-email").type(email)
    }
async  enterTelephone(phone: string) {
        await this.page.locator("input[name='telephone']").type(phone)
    }

async  enterPassword(password: string) {
        await this.page.locator("input[name='password']").type(password)
    }    
async  enterConfirmPassword(password: string) {
        await this.page.locator("#input-confirm").type(password)
    }        
 isSubscribedChecked() {
    return  this.page.locator("#input-newsletter-no");
}

async  clickTermCondition() {
    await this.page.click("//Label[@for='input-agree']")
}    
async  clickContinueToRegister() {
    await Promise.all([
        this.page.waitForNavigation({waitUntil: "networkidle"}),
        this.page.click("input[value='Continue']")
    ])
    
}    

}