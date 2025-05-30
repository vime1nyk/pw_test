import { test, expect } from '@playwright/test';

test('child elements', async ({page}) => {
    await page.goto('https://www.w3schools.com');

    await page.locator('#subtopnav').getByTitle('How to').click();
});

test('parent elements - text', async ({page}) => {
    await page.goto('https://www.techmagic.co/');

    // const boxElement = page.locator(`//*[contains(text(), "FinTech")]/ancestor::*[@class='sw1__item']`);

    const boxElement = page.locator(`.sw1__item`, {hasText: 'FinTech'});

    await boxElement.hover();

    await boxElement.getByRole('link', {name: 'View more'}).click();

});

test('parent elements - element', async ({page}) => {
    await page.goto('https://www.techmagic.co/');

    const boxElement = page.locator(`.sw1__item`, {has: page.getByRole('heading', {name: 'FinTech'})});

    await boxElement.hover();

    await boxElement.getByRole('link', {name: 'View more'},).click();

});

test('parent elements - filter', async ({page}) => {
    await page.goto('https://www.techmagic.co/');

    const boxElement = page.locator(`.sw1__item`).filter({has: page.getByRole('heading', {name: 'FinTech'})});

    await boxElement.hover();

    await boxElement.getByRole('link', {name: 'View more'}).click();

});

test('input', async ({page}) => {
    await page.goto('https://www.w3schools.com');

    const inputField = page.getByPlaceholder('Search...');

    await inputField.fill('typescript');

    const text = await inputField.inputValue();

    console.log(text);

    await expect(inputField).toHaveValue('typescript');

    await page.waitForTimeout(1000);

    await inputField.clear();
});

test('checkbox/radio', async ({page}) => {
    await page.goto('https://www.w3schools.com');

    await page.locator('.tnb-right-section').getByTitle('Sign Up').click();

    await page.waitForTimeout(1000);

    const checkbox = page.getByRole('checkbox');

    // await checkbox.click();

    // await checkbox.check();

    // await checkbox.uncheck();

    const checked = await checkbox.isChecked();

    console.log(checked);

    // await expect(checkbox).toBeChecked();
    
});

test('dialog box', async ({page}) => {
    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');

    page.on('dialog', dialog => {
        dialog.accept();
    });

    await page.getByRole('button', {name: 'Show confirm box'}).click()

    await page.waitForTimeout(1000);

    await page.waitForTimeout(1000);

});

test('iframe', async ({page}) => {
    await page.goto('https://huckleberrycare.com/gift-card');

    const frame = page.frameLocator(`.gift-up-target iframe`);

    const premiumBox = frame.locator('.item-group', {hasText: 'Huckleberry Premium'});

    await premiumBox.scrollIntoViewIfNeeded();

    await page.waitForTimeout(1000);

    await premiumBox.locator('svg').click();
});


test.afterEach( async ({page}) => {
    await page.waitForTimeout(3000);
    page.close();
});