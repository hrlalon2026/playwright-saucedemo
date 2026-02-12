import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';

test('Performance user flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('performance_glitch_user', 'secret_sauce');

  await inventoryPage.resetAppState();

  await inventoryPage.sortByZtoA();
  await inventoryPage.addFirstItemToCart();

  await inventoryPage.goToCart();

  await checkoutPage.proceedToCheckout();
  await checkoutPage.fillInformation();

  await checkoutPage.verifyProductNames();
  await checkoutPage.verifyTotalPrice();

  await checkoutPage.finishOrder();
  await checkoutPage.verifySuccessMessage();

  await inventoryPage.resetAppState();
  await inventoryPage.logout();
});
