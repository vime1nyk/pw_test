import {test} from '@playwright/test'
import { TestPageObjectPage } from '../page-objects/test-page-object';
import { HomePageV2 } from '../page-objects/w3-home-pageV2';
import { HomePage } from '../page-objects/w3-home-page';

test('po test', async ({page}) => {
    await page.goto('http://uitestingplayground.com/textinput');

    const testPage = new TestPageObjectPage(page);
    await testPage.fillInput('test button')
    await testPage.clickButton();
    await testPage.assertButtonHasText('test button');
})

test('po test V2', async ({page}) => {
    await page.goto('https://www.w3schools.com/');

    const homePage = new HomePage(page);
    await homePage.clickLogIn();

    const homePageV2 = new HomePageV2(page);
    await homePageV2.clickLogIn();
})

test.afterEach(async ({page}) => {
    await page.waitForTimeout(5000);
    await page.close()
});