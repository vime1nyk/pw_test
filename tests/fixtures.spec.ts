import { expect, test } from '../fixtures/log-in-fixture';
import { HeaderComponent } from '../page-objects/w3school/header-component';
import { HeaderLoginModal } from '../page-objects/w3school/header-login-modal';
import { HeaderProfileMenu } from '../page-objects/w3school/header-profile-menu';
import { EditProfilePage } from '../page-objects/w3school/edit-profile-page';

test('without fixture', async ({ page }) => {
    //login
    await page.goto('https://www.w3schools.com/');

    const header = new HeaderComponent(page);
    await header.clickSignIn();

    const headerLoginModal = new HeaderLoginModal(page);
    await headerLoginModal.fillEmail('bobbylain@yopmail.com');
    await headerLoginModal.fillPassword('Testing1_');
    await headerLoginModal.clickSignInButton();

    //test
    await header.clickProfileButton();

    const headerProfileMenu = new HeaderProfileMenu(page);
    await headerProfileMenu.clickEditProfileButton();

    const editProfilePage = new EditProfilePage(page);
    await editProfilePage.assertPageIsDisplayed();

});

test('with fixture', async ({ page, loggedInHomePage, header }) => {
    //test
    await header.clickProfileButton();

    const headerProfileMenu = new HeaderProfileMenu(page);
    await headerProfileMenu.clickEditProfileButton();

    const editProfilePage = new EditProfilePage(page);
    await editProfilePage.assertPageIsDisplayed();
});

test('stored state', async ({ page }) => {
    await page.goto('https://www.w3schools.com/');
    
    const header = new HeaderComponent(page);
    await header.clickProfileButton();

    const headerProfileMenu = new HeaderProfileMenu(page);
    await headerProfileMenu.clickEditProfileButton();

    const editProfilePage = new EditProfilePage(page);
    await editProfilePage.assertPageIsDisplayed();
});

test.afterEach( async ({page}) => {
    await page.waitForTimeout(3000);
    page.close();
});