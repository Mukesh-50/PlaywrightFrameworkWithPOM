import { BasePage } from "./BasePage.js";

export class RegistrationPage extends BasePage{


    constructor(page)
    {
        super(page)
        this.newURLLink=this.page.getByText("New user? Signup")
        this.name=this.page.getByPlaceholder("Name")
        this.email=this.page.getByPlaceholder("Email")
        this.password=this.page.getByPlaceholder("Password")
        this.interest=this.page.getByText("JavaScript",{exact:true})
        this.gender=this.page.locator("//input[@value='Male']")
        this.state=this.page.locator("#state")
        this.hobbies=this.page.locator("#hobbies")
        this.signInButton=this.page.locator(".submit-btn")
    }

    async clickOnNewUser(){
        await this.newURLLink.click();
    }

    async enterName(name){
        await this.name.fill(name);
    }
    
    async enterEmail(email){
        await this.email.fill(email);
    }

    async enterPassword(password){
        await this.password.fill(password);
    }

    async selectInterest(){
        await this.interest.click();
    }

    async selectGender(){
        await this.gender.click();
    }

    async selectState(state){
        await this.state.selectOption({value:state});
    }

    async enterHobbies(hobbies){
        await this.hobbies.selectOption(hobbies);
    }

    async clickSignIn(){
        await this.signInButton.click();
    }

    
}