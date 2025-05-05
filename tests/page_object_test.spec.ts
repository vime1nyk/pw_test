import {test} from '@playwright/test'
import { TestPageObjectPage } from '../page-objects/test-page-object';

test('po test', async ({page}) => {
    await page.goto('http://uitestingplayground.com/textinput');

    const testPage = new TestPageObjectPage(page);
    await testPage.fillInput('test button')
    await testPage.clickButton();
    await testPage.assertButtonHasText('test button');
})

test.afterEach(async ({page}) => {
    await page.waitForTimeout(5000);
    await page.close()
});