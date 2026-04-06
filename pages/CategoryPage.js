import { BasePage } from "./BasePage.js"

export class CategoryPage extends BasePage
{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        super(page)
        this.addNewCategoryBtn = this.page.getByText("Add New Category ")
    }

    /**
     * Clicks Add New Category, types name in JS prompt, accepts it
     * @param {string} name
     */
    async addCategory(name)
    {
        await this.acceptDialog(name)
        await this.addNewCategoryBtn.click()
    }

    async deleteCategory(name)
    {
        await this.page.locator(`//td[text()='${name}']//following::button[1]`).click()
        await this.page.locator("//button[text()='Delete']").click()
    }

    async verifyCategoryVisible(name)
    {
        await this.assertVisible(this.page.getByText(name,{exact:true}))
    }

    async verifyCategoryNotVisible(name)
    {
        await this.assertNotVisible(this.page.getByText(name,{exact:true}))
    }

}
