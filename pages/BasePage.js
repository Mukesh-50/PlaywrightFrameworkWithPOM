// Common useful method which will be used across all pages mostly playwright method
import {expect} from "@playwright/test"

export class BasePage
{

    /**
     * @param{import("@playwright/test").Page} page
     */

    constructor(page)
    {
        this.page=page
    }

    async refreshApplication()
    {
        await this.page.reload()
    }

    async goBack()
    {
        await this.page.goBack()
    }

    async goForward()
    {
        await this.page.goForward()
    }

    async goto(path)
    {
        await this.page.goto(path)
    }

    getCurrentURL()
    {
        return this.page.url()
    }

    async getCurrentTitle()
    {
        return await this.page.title()
    }

    /*
        Create a method for type with default argument and use in all pages
    */

    async assertUrlNotContains(pattern)
    {
        await expect(this.page).not.toHaveURL(pattern)
    }

     async assertUrlContains(pattern)
    {
        await expect(this.page).toHaveURL(pattern)
    }

     /**
     * 
     * @param {import("@playwright/test").Locator} locator 
     * @param {number} timeout 
     */
   
    async waitForVisible(locator,timeout=10000)
    {
        await locator.waitFor({state:"visible",timeout})
    }

    /**
     * @param {import("@playwright/test").Locator} locator
     * @param {number} timeout
     */
    async waitForHidden(locator,timeout=10000)
    {
        await locator.waitFor({state:"hidden",timeout})
    }

    /**
     * @param {import("@playwright/test").Locator} locator
     */
    async assertVisible(locator)
    {
        await expect(locator).toBeVisible()
    }

    /**
     * @param {import("@playwright/test").Locator} locator
     */
    async assertNotVisible(locator)
    {
        await expect(locator).not.toBeVisible()
    }

    /**
     * @param {number} ms - milliseconds to wait
     */
    async wait(ms=2000)
    {
        await this.page.waitForTimeout(ms)
    }

    async logout()
    {
        await this.page.getByAltText("menu").click()
        await this.page.getByText("Sign out",{exact:true}).click()
    }

    /**
     * @param {string} text - text to type into the JS prompt before accepting
     */
    /**
     * @param {string} text - text to type into the JS prompt before accepting
     */
    async acceptDialog(text)
    {
        this.page.once("dialog", async dialog =>
        {
            await dialog.accept(text)
        })
    }

     async dismissDialog(text)
    {
        this.page.once("dialog", async dialog =>
        {
            await dialog.dismiss()
        })
    }

    async switchToMainPage()
    {
        const pages = this.page.context().pages()
        await this.page.close()
        await pages[0].bringToFront()
    }
}
