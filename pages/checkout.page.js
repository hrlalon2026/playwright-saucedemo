import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.checkoutButton = '#checkout';
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.productNames = '.inventory_item_name';
    this.totalPrice = '.summary_total_label';
    this.successMessage = '.complete-header';
    this.productPrices = '.inventory_item_price';


  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillInformation() {
    await this.page.fill(this.firstName, 'Habib');
    await this.page.fill(this.lastName, 'Rahman');
    await this.page.fill(this.postalCode, '3130');
    await this.page.click(this.continueButton);
  }

  async verifyProducts() {
    const products = await this.page.locator(this.productNames);
    await expect(products).toHaveCount(3);
  }

  async verifyTotalPrice() {
    await expect(this.page.locator(this.totalPrice)).toContainText('Total:');
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async verifySuccessMessage() {
    await expect(this.page.locator(this.successMessage))
      .toHaveText('Thank you for your order!');
  }

  // at least 1 product exist
async verifyProductNames() {
  const names = await this.page.locator(this.productNames).allTextContents();
  expect(names.length).toBeGreaterThan(0);
}

async verifyTotalPrice() {
  const prices = await this.page.locator(this.productPrices).allTextContents();

  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sum = numericPrices.reduce((a, b) => a + b, 0);

  const totalText = await this.page.locator(this.totalPrice).textContent();
  const totalValue = parseFloat(totalText.replace(/[^0-9.]/g, ''));

  expect(totalValue).toBeGreaterThan(sum);
}

}
