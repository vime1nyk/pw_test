import { Locator, Page, expect } from "@playwright/test";

export class HomePage {

    private readonly page: Page;
    private readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.getByText('Learn to Code');
    }

    async assertPageIsDisplayed() {
        await expect(this.title).toBeVisible();
    }
}