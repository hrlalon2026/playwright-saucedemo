import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';

test('Standard user complete purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  // Reset app state
  await inventoryPage.resetAppState();

  // Add items
  await inventoryPage.addFirstThreeItemsToCart();

  // Go to cart
  await inventoryPage.goToCart();

  // Checkout
  await checkoutPage.proceedToCheckout();
  await checkoutPage.fillInformation();

  //  Check products
  await checkoutPage.verifyProducts();

  //  Total Price
  await checkoutPage.verifyTotalPrice();

  // Finish Order
  await checkoutPage.finishOrder();

  // Success message
  await checkoutPage.verifySuccessMessage();

  //Reset & logout
  await inventoryPage.resetAppState();
  await inventoryPage.logout();

});
