import { Page } from "@playwright/test";

export default class homePage{

    constructor(public page: Page) {
    }

    async  megamenuTitle() {
        await this.page.hover("' Mega Menu'")
        }

    async  clickOnApple() {
        await this.page.locator("//*[@id='entry281_216477']//a").nth(0).click();
        }


}