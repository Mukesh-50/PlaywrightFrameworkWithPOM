import { BasePage } from "./BasePage.js"
import { CategoryPage } from "./CategoryPage.js"

export class DashboardPage extends BasePage
{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        super(page)
        this.manageMenu           = this.page.getByText("Manage",{exact:true})
        this.manageCoursesLink    = this.page.getByText("Manage Courses",{exact:true})
        this.manageCategoriesLink = this.page.getByText("Manage Categories",{exact:true})
    }

    async hoverOnManage()
    {
        await this.manageMenu.hover()
    }

    async clickManageCourses()
    {
        await this.manageCoursesLink.click()
    }

    async navigateToManageCourses()
    {
        await this.hoverOnManage()
        await this.clickManageCourses()
    }

    /**
     * Clicks Manage Categories which opens in a new tab
     * Returns a CategoryPage instance pointing to the new tab
     * @returns {Promise<CategoryPage>}
     */
    async navigateToManageCategories()
    {
        await this.hoverOnManage()
        const [newTab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.manageCategoriesLink.click()
        ])
        await newTab.waitForLoadState("networkidle")
        //console.log("new tab title: " + await newTab.title())
       // console.log("new tab url: " + newTab.url())
        //return new CategoryPage(newTab)
    }

}
