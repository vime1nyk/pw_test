import { test as a} from '@playwright/test';
import { HomePage } from '../page-objects/w3school/home-page';
import { HeaderComponent } from '../page-objects/w3school/header-component';
import { HeaderLoginModal } from '../page-objects/w3school/header-login-modal';

type TestFixtures = {
    loggedInHomePage: HomePage;
    header: HeaderComponent;
};

export const test = a.extend<TestFixtures>({
    loggedInHomePage: async ({ page }, use) => {
        await page.goto('https://www.w3schools.com/');

        const header = new HeaderComponent(page);
        await header.clickSignIn();

        const headerLoginModal = new HeaderLoginModal(page);
        await headerLoginModal.fillEmail('bobbylain@yopmail.com');
        await headerLoginModal.fillPassword('Testing1_');
        await headerLoginModal.clickSignInButton();

        await use(new HomePage(page));
    },
    header: async ({ page }, use) => {
        await use(new HeaderComponent(page));
    },
});

export { expect } from '@playwright/test';