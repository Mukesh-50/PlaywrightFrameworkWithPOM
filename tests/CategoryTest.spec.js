import { test } from "../fixtures/fixture.js"
import credentials from "../testdata/credentials.json" assert { type: "json" }

test.describe("Category Management Tests", () => {

    test("Add New Category And Verify", async ({ loginPage, dashboardPage }) => 
    {
        const categoryName = `Playwright_${Date.now()}`
        
        // Step 1 - Login
        await loginPage.goto("/login")

        await loginPage.loginToApplication(credentials.username, credentials.password)

        // Step 2 - Hover Manage → Click Manage Categories → new tab opens
        const categoryPage = await dashboardPage.navigateToManageCategories()

        // Step 3 - Click Add New Category → JS alert → type name → accept
        await categoryPage.addCategory(categoryName)

       
        // Step 4 - Verify category is created on the page
        await categoryPage.verifyCategoryVisible(categoryName)

        // Step 5 - Click on category then click Delete button
        await categoryPage.deleteCategory(categoryName)

       
        // Step 6 - Verify category is deleted
        await categoryPage.verifyCategoryNotVisible(categoryName)

        // Step 7 - Switch back to main tab
        await categoryPage.switchToMainPage()


        // Step 8 - Logout
        await dashboardPage.logout()

    })

})
