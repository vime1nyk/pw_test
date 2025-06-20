import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://www.w3schools.com');
});

test('where to begin page @ui', async ({page}) => {
    await page.getByText(`Not Sure Where To Begin?`).click();

    await expect(page.getByText(`To become a web developer`)).toBeVisible();

    await expect(page).toHaveScreenshot('not_sure_where_to_begin.png')
});

test('color picker page @ui', async ({page}) => {
    const colorPicker = page.getByAltText('Colorpicker');

    await colorPicker.scrollIntoViewIfNeeded();

    await colorPicker.click();

    await expect(page).toHaveScreenshot('color_picker.png')
});

test.afterEach( async ({page}) => {
    await page.waitForTimeout(2000);
    page.close();
});