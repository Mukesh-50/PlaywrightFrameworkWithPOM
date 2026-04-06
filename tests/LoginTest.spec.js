import { test } from "../fixtures/fixture.js";

import credentials from "../testdata/credentials.json" assert { type: "json" }

test.describe("All Login Scenarions",()=>{


    test("Login To Application With Valid Credentials",async function ({loginPage})
    {
        await loginPage.goto("/login")

        await loginPage.enterEmail(credentials.username)

        await loginPage.enterPassword(credentials.password)

        await loginPage.clickOnLoginButton()

        await loginPage.assertUrlNotContains(/login/)

    })

    

})


