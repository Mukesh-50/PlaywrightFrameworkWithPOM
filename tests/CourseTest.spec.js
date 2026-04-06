import { test } from "../fixtures/fixture.js";
import courseData from "../testdata/course.json" assert { type: "json" };
import credentials from "../testdata/credentials.json" assert { type: "json" };

test.describe("Course Management Tests", () => {

    test("Create New Course After Login", async ({ loginPage, dashboardPage, coursePage }) => {

        const courseName = `${courseData.courseName}_${Date.now()}`

        const thumbnailPath = courseData.thumbnail

        // Step 1 - Login
        await loginPage.goto("/login")

        await loginPage.loginToApplication(credentials.username, credentials.password)

        // Step 2 - Navigate to Manage Courses from Dashboard
        await dashboardPage.navigateToManageCourses()

        // Step 3 - Click Add New Course
        await coursePage.clickAddNewCourse()

        // Step 4 - Fill course details
        await coursePage.uploadThumbnail(thumbnailPath)
        await coursePage.enterCourseName(courseName)
        await coursePage.enterDescription(courseData.description)
        await coursePage.enterInstructorName(courseData.instructorName)
        await coursePage.enterPrice(courseData.price)

        // Step 5 - Select start date (pick day 31)
        await coursePage.selectStartDate()

        // Step 6 - Select end date (pick day 31)
        await coursePage.selectEndDate()

        // Step 7 - Select category
        await coursePage.selectCategory(courseData.category)

        // Step 8 - Save
        await coursePage.clickSave()

        // Step 9 - Verify course is created on the next page
        await coursePage.assertVisible(coursePage.page.getByText(courseName,{exact:true}))

        // Step 10 - Delete the created course
        await coursePage.deleteCourse(courseName)

        // Step 11 - Verify course is deleted
        await coursePage.verifyCourseDeleted(courseName)

        // Step 12 - Logout
        await coursePage.logout()

    })

})
