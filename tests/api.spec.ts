import { expect, test } from '@playwright/test'
import data from '../test-files/test-data.json'

test('mock api', async ({ page }) => {
    await page.route('https://www.ukr.net/ajax/start.json', async route => {
        await route.fulfill({
            body: JSON.stringify(data)
        });
    });

    await page.goto('https://www.ukr.net/');
    
    await page.waitForTimeout(1000);
})

test('perform request get', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects/7');
    const responseBody = await response.json();

    expect(response.status()).toBe(200);

    console.log(responseBody);
})

test('perform request post', async ({ request }) => {
    const response = await request.post('https://api.restful-api.dev/objects', {
        data: {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
})

test('intersept response', async ({ page }) => {
    await page.goto('https://profile.w3schools.com/login');

    const response = await page.waitForResponse('https://w3schools.zendesk.com/embeddable/config');
    const body = await response.json();
    console.log(body.brand)
})