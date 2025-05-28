import { Locator, Page } from "@playwright/test";


export class HeaderProfileMenu {

    private readonly page: Page;
    private readonly editProfileButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editProfileButton = this.page.getByRole('link', {name: 'Edit profile'});
    }

    async clickEditProfileButton() {
        await this.editProfileButton.click();
    }
}