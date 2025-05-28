import { Locator, Page } from "@playwright/test";

export class HeaderComponent {

    private readonly page: Page;
    private readonly signInButton: Locator;
    private readonly profileButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = this.page.getByRole('button', {name: 'Sign in'});
        this.profileButton = this.page.locator('#pagetop').getByRole('img', {name: 'Profile Progress'});
    }

    async clickProfileButton() {
        await this.profileButton.click();
    }
    
    async clickSignIn() {
        await this.signInButton.click();
    }
}