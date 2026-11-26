import { test } from '@tests/fixtures';
import { Page, expect } from '@playwright/test';
import LoginPage from '@tests/pages/Login.page';
import HomePage from '@tests/pages/Home.page';

export default class LoginSteps {
  public readonly page: Page;
  public readonly loginPage: LoginPage;
  public readonly homePage: HomePage;

  constructor(page: Page, loginPage: LoginPage, homePage: HomePage) {
    this.page = page;
    this.loginPage = loginPage;
    this.homePage = homePage;
  }

  async login() {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill('karamfilovs@gmail.com');
      await this.loginPage.PASSWORD_INPUT.fill('111111');
      await this.loginPage.LOGIN_BUTTON.click();
      await expect(this.page).toHaveTitle(this.homePage.title);
    });
  }
}
