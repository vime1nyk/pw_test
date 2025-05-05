import { Locator, Page, expect } from "@playwright/test";


export class TestPageObjectPage {

    private readonly page: Page;
    private readonly textField: Locator;
    private readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textField = page.getByPlaceholder('MyButton');
        this.button = page.getByRole('button');
    }

    async fillInput(text: string) {
        await this.textField.fill(text);
    }

    async clickButton() {
        await this.button.click();
    }

    async assertButtonHasText(text: string) {
        await expect(this.button).toHaveText(text);
    }
}