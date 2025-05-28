import { Locator, Page, expect } from "@playwright/test";

export class EditProfilePage {

    private readonly page: Page;
    private readonly profileDetailsSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileDetailsSection = this.page.locator('#account-section');
    }

    async assertPageIsDisplayed() {
        await expect(this.profileDetailsSection).toBeVisible();
    }
}