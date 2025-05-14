import { Locator, Page } from "@playwright/test";


export class HomePage {

    private readonly page: Page;
    private readonly logo: Locator;
    private readonly searchField: Locator;
    private readonly logInButton: Locator;
    private readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = this.page.getByTitle('Home');
        this.searchField = this.page.getByPlaceholder('Search...', {exact: true});
        this.logInButton = this.page.locator('#top-nav-bar').getByRole('link', {name: 'Login'});
        this.signUpButton = this.page.locator('#top-nav-bar').getByRole('link', {name: 'Sign Up'});
    }

    async clickLogo() {
        await this.logo.click();
    }
    
    async clickLogIn() {
        await this.logInButton.click();
    }

    async clickSignUp() {
        await this.signUpButton.click();
    }

    async fillSearchFiled(text: string) {
        await this.searchField.fill(text);
    }
    

}