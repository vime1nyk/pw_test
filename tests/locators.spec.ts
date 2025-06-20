import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://www.w3schools.com');
});

test('getByText', async ({page}) => {
    await page.getByText(`Not Sure Where To Begin?`).click();

    await expect(page.getByText(`To become a web developer`)).toBeVisible();
});

test('getByPlaceholder', async ({page}) => {
    const serachField = page.getByPlaceholder('Search...');
    await serachField.fill('typescript');
});

test('getByTitle', async ({page}) => {
    await page.getByText(`Not Sure Where To Begin?`).click();

    await page.waitForTimeout(1000);


    await page.getByTitle('Home').click();
});

test('getByAltText', async ({page}) => {
    const colorPicker = page.getByAltText('Colorpicker');

    await colorPicker.scrollIntoViewIfNeeded();

    await colorPicker.click();

    await expect(page.locator(".class")).toBeVisible({timeout: 5000});
});

test('getByRole', async ({page}) => {
    const serachField = page.getByRole('textbox', {name: 'Search field'});

    await serachField.fill('typescript');
});

test('getByRole 2', async ({page}) => {
    const forTeachersButton = page.getByRole('link', {name: 'W3Schools Academy'});

    await forTeachersButton.click();
});

test('getByRole 3', async ({page}) => {
    const themeToggle = page.getByRole('button', {name: 'Toggle'});

    await themeToggle.click();
});


test.afterEach( async ({page}) => {
    await page.waitForTimeout(3000);
    page.close();
});