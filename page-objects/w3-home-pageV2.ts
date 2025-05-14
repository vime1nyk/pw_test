import { Locator, Page } from "@playwright/test";


export class HomePageV2 {

    private readonly logo: Locator = this.page.getByTitle('Home');
    private readonly searchField: Locator = this.page.getByPlaceholder('Search...', {exact: true});
    private readonly logInButton: Locator = this.page.locator('#top-nav-bar').getByRole('link', {name: 'Login'});
    private readonly signUpButton: Locator = this.page.locator('#top-nav-bar').getByRole('link', {name: 'Sign Up'});

    constructor(private readonly page: Page) {}

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