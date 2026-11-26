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

  async login(username: string, password: string): Promise<void> {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      await this.loginPage.LOGIN_BUTTON.click();
      await expect(this.page).toHaveTitle(this.homePage.title);
    });
  }

  async loginFail(username: string, password: string): Promise<void> {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      await this.loginPage.LOGIN_BUTTON.click();
      await expect(this.page).toHaveTitle(this.loginPage.title);
    });
  }

  async validateErrorMessage(scenario: string, errorMessage: string): Promise<void> {
    await test.step('Validate Error Message', async () => {
      switch (scenario) {
        case 'Invalid credentials':
          await expect(this.loginPage.ERROR_BOX).toHaveText(errorMessage);
          break;
        case 'Empty password':
          await expect(this.loginPage.PASSWORD_INPUT).toHaveCSS('border-color', 'rgb(239, 68, 68)');
          break;
        case 'Empty username':
          await expect(this.loginPage.EMAIL_ERROR_BOX).toHaveText(errorMessage);
          break;
        case 'both empty':
          await expect(this.loginPage.EMAIL_ERROR_BOX).toHaveText(errorMessage);
          await expect(this.loginPage.EMAIL_INPUT).toHaveCSS('border-color', 'rgb(239, 68, 68)');
          await expect(this.loginPage.PASSWORD_INPUT).toHaveCSS('border-color', 'rgb(239, 68, 68)');
          break;
        default:
          expect(true, `Unknown scenario: ${scenario}`).toBe(false);
      }
    });
  }
}
