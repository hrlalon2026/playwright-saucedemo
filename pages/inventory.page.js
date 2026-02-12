import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.menuButton = '#react-burger-menu-btn';
    this.resetAppStateLink = '#reset_sidebar_link';
    this.logoutLink = '#logout_sidebar_link';
    this.firstThreeAddToCartButtons = '.inventory_item button';
    this.shoppingCartLink = '.shopping_cart_link';
    this.sortDropdown = '.product_sort_container';
    this.inventoryItemNames = '.inventory_item_name';
    this.sortDropdown = '.product_sort_container';
    this.addToCartButtons = '.inventory_item button';

  }

  // Reset app state
  async resetAppState() {
  await this.page.click(this.menuButton);

  await this.page.waitForSelector(this.resetAppStateLink);
  await this.page.click(this.resetAppStateLink);
  await this.page.click('#react-burger-cross-btn');
}


  // Add items to cart
  async addFirstThreeItemsToCart() {
    const buttons = await this.page.locator(this.firstThreeAddToCartButtons);
    for (let i = 0; i < 3; i++) {
      await buttons.nth(i).click();
    }
  }

  // go to cart
  async goToCart() {
    await this.page.click(this.shoppingCartLink);
  }

  // Product name
  async getProductNames() {
    return await this.page.locator(this.inventoryItemNames).allTextContents();
  }

  // logut
  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }

  // Sort Z to A
async sortByZtoA() {
  await this.page.selectOption(this.sortDropdown, 'za');
}

// add product only
async addFirstItemToCart() {
  await this.page.locator(this.addToCartButtons).first().click();
}

}
