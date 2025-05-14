import {test} from '@playwright/test'

test('upload file', async ({page}) => {
    await page.goto('https://www.iloveimg.com/meme-generator');

    // option 1 when input is not available and apperas after button click
    // const fileChooserPromise = page.waitForEvent('filechooser');
    // await page.getByRole('link', {name: 'Upload image'}).click();

    // const fileChooser = await fileChooserPromise;
    // await fileChooser.setFiles('./test-files/maxwell-cat.gif');

    // option 2 when input is available
    await page.setInputFiles('input[type="file"]', './test-files/maxwell-cat.gif')
    
})