import { test, expect } from '@playwright/test';


test('assertions', async ({ page }) => {
  await page.goto ('https://www.w3schools.com/');

  await page.locator('#subtopnav').getByTitle('Java Tutorial').click();
  const titleText = await page.locator('#main h1').textContent();

  //general assertions
  expect(titleText).toContain('Java Tutorial');

  //locator assertions
  await expect(page.locator('#main h1')).toHaveText('Java Tutorial');
});

test('auto waiting', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');

  await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();

  await page.locator('.bg-success').click();
});

test('auto waiting - custom wait', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');

  await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();

  // element state
  // await page.locator('.bg-success').waitFor({ state: 'visible' });

  // wait for element
  // await page.waitForSelector('.bg-success');

  // wait for api response
  // await page.waitForResponse(`http://uitestingplayground.com/ajaxdata`);

  // hardcoded timeout
  // await page.waitForTimeout(16000);

  const text = await page.locator('.bg-success').allTextContents();

  expect(text).toContain('Data loaded with AJAX get request.');
});

test('auto waiting - custom wait locator assertion', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');

  await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();

  await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.');
  // await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});
});

test('timeout', async ({ page }) => {
  // test.setTimeout(4000);
  // test.slow();

});

test.beforeEach(async ({page}, testInfo) => {
  // testInfo.setTimeout(80000); // set timeout for all tests in suite
  // test.setTimeout(20000); // works only for beforeEach hook
});

test.afterEach(async ({page}) => {
  await page.waitForTimeout(5000);
  await page.close()
});



