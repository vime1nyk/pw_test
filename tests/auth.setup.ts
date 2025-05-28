import { test as setup} from '@playwright/test'
import { HeaderComponent } from '../page-objects/w3school/header-component';
import { HeaderLoginModal } from '../page-objects/w3school/header-login-modal';

const authFile = '.auth/user.json';

setup('authentication', async ({page}) => {
    await page.goto('https://www.w3schools.com/');

    const header = new HeaderComponent(page);
    await header.clickSignIn();

    const headerLoginModal = new HeaderLoginModal(page);
    await headerLoginModal.fillEmail('bobbylain@yopmail.com');
    await headerLoginModal.fillPassword('Testing1_');
    await headerLoginModal.clickSignInButton();

    await page.waitForTimeout(3000);

    await page.context().storageState({path: authFile});
})