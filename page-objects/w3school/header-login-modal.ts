import { Locator, Page } from "@playwright/test";


export class HeaderLoginModal {

    private readonly page: Page;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = this.page.getByRole('button', {name: 'Sign In', exact: true})
        this.emailField = this.page.getByPlaceholder('Email');
        this.passwordField = this.page.getByPlaceholder('Password');
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
    
    async fillEmail(email: string) {
        await this.emailField.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordField.fill(password);
    }
}