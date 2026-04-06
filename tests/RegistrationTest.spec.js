import { test } from "../fixtures/fixture.js";
import testData from "../testdata/registration.json" assert { type: "json" }


test.describe("New User Registration Test",()=>{

    for(const data of testData){

        test(`Create New User Using POM ${data.name}`,async function ({registrationPage})
    {
        await registrationPage.goto("/login")

        await registrationPage.clickOnNewUser()

        await registrationPage.enterName(data.name)

        await registrationPage.enterEmail(`${data.email}_${Date.now()}@email.com`)

        await registrationPage.enterPassword(data.password)

        await registrationPage.selectInterest()

        await registrationPage.selectGender()

        await registrationPage.selectState(data.state)

        await registrationPage.enterHobbies(data.hobbies)

        await registrationPage.clickSignIn()

        await registrationPage.assertUrlNotContains(/signup/)

    })

    }

})


