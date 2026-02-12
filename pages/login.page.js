import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    
    this.errorMessage = '[data-test="error"]';
  }

  // login page
  async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // try login
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // check error message
  async verifyLockedUserError() {
    await expect(this.page.locator(this.errorMessage))
      .toHaveText('Epic sadface: Sorry, this user has been locked out.');
  }
}
