import { BasePage } from "./BasePage.js"

export class CoursePage extends BasePage
{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        super(page)
        this.addNewCourseBtn    = this.page.locator("text=Add New Course")
        this.thumbnailInput     = this.page.locator("#thumbnail")
        this.courseNameInput    = this.page.locator("#name")
        this.descriptionInput   = this.page.locator("#description")
        this.instructorInput    = this.page.locator("#instructorNameId")
        this.priceInput         = this.page.locator("#price")
        this.startDateInput     = this.page.locator("input[name='startDate']")
        this.endDateInput       = this.page.locator("input[name='endDate']")
        this.categoryDropdown   = this.page.getByText("Select Category",{exact:true})
        this.saveButton         = this.page.getByText("Save",{exact:true})
        this.datepickerDays     = this.page.locator("//div[contains(@class,'datepicker__day')]")
    }

    async clickAddNewCourse()
    {
        await this.addNewCourseBtn.click()
    }

    /**
     * @param {string} filePath - absolute path to image file
     */
    async uploadThumbnail(filePath)
    {
        await this.thumbnailInput.setInputFiles(filePath)
    }

    async enterCourseName(name)
    {
        await this.courseNameInput.fill(name)
    }

    async enterDescription(description)
    {
        await this.descriptionInput.fill(description)
    }

    async enterInstructorName(name)
    {
        await this.instructorInput.fill(name)
    }

    async enterPrice(price)
    {
        await this.priceInput.clear()
        await this.priceInput.fill(price)
    }

    async selectDateWith31(dateInput)
    {
        await dateInput.click()
        const days = await this.datepickerDays.all()
        for(const day of days)
        {
            const text = await day.textContent()
            if(text.trim() === "31")
            {
                await day.click()
                break
            }
        }
    }

    async selectStartDate()
    {
        await this.selectDateWith31(this.startDateInput)
    }

    async selectEndDate()
    {
        await this.selectDateWith31(this.endDateInput)
    }

    async selectCategory(category)
    {
        await this.categoryDropdown.click()
        await this.page.getByText(category,{exact:true}).click()
    }

    async clickSave()
    {
        await this.saveButton.click()
    }

    async verifyCourseCreated(name)
    {
        await this.assertVisible(this.page.locator(`text=${name}`))
    }

    async deleteCourse(name)
    {
        await this.page.locator(`//td[text()='${name}']//following::button[1]`).click()
    }

    async verifyCourseDeleted(name)
    {
        await this.assertNotVisible(this.page.locator(`text=${name}`))
    }

}
