import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('Locked out user should not be able to login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Go to login page
  await loginPage.goToLoginPage();

  // Try login with locked_out_user
  await loginPage.login('locked_out_user', 'secret_sauce');

  // check error message
  await loginPage.verifyLockedUserError();

});
