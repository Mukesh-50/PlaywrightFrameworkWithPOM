import {test as base,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js";
import { RegistrationPage } from "../pages/RegistrationPage.js";
import { DashboardPage } from "../pages/DashboardPage.js";
import { CoursePage } from "../pages/CoursePage.js";
import { CategoryPage } from "../pages/CategoryPage.js";


/**
 * @typedef  {object} CustomFixtures
 * @property {LoginPage} loginPage
 * @property {RegistrationPage} registrationPage
 * @property {DashboardPage} dashboardPage
 * @property {CoursePage} coursePage
 * @property {CategoryPage} categoryPage
 */

/** @type {import('@playwright/test').TestType<CustomFixtures & import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */
const test=base.extend({

    loginPage: async ({page}, use) => {

        console.log("Running Login Fixture For Test");

        const loginPage = new LoginPage(page);

        // whatever you write before use will be executed before each test
        await use(loginPage)

        // whatever you write after use will be executed after each test

    },
    registrationPage: async ({page}, use) => {

        console.log("Running Registration Fixture For Test");

        const registrationPage = new RegistrationPage(page);

        // whatever you write before use will be executed before each test
        await use(registrationPage)

        // whatever you write after use will be executed after each test

    },

    dashboardPage: async ({page}, use) => {

        console.log("Running Dashboard Fixture For Test");

        const dashboardPage = new DashboardPage(page);

        await use(dashboardPage)

        // Close browser after test
        await page.close()

    },

    coursePage: async ({page}, use) => {

        console.log("Running Course Fixture For Test");

        const coursePage = new CoursePage(page);

        await use(coursePage)

        // Close browser after test
        await page.close()

    }


});

export{test,expect}