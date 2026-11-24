import { test } from '@tests/fixtures';
import { Page, expect } from '@playwright/test';
import LoginPage from '@tests/pages/Login.page';

export default class SharedSteps {
  public readonly page: Page;
  public readonly loginPage: LoginPage;

  constructor(page: Page, loginPage: LoginPage) {
    this.page = page;
    this.loginPage = loginPage;
  }

  async navigateToSite() {
    await test.step('Navigate to Site', async () => {
      await this.page.goto('https://st2016.inv.bg');
      await expect(this.page).toHaveTitle(this.loginPage.title);
    });
  }
}
