import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class LoginPage extends BasePage {
  public readonly EMAIL_INPUT: Locator;
  public readonly PASSWORD_INPUT: Locator;
  public readonly LOGIN_BUTTON: Locator;
  public readonly ERROR_BOX: Locator;
  public readonly EMAIL_ERROR_BOX: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/login';
    this.title = 'Вход';

    this.EMAIL_INPUT = this.page.locator('#loginusername');
    this.PASSWORD_INPUT = this.page.locator('#loginpassword');
    this.LOGIN_BUTTON = this.page.getByRole('button', { name: 'Вход' });
    this.ERROR_BOX = this.page.locator('#error');
    this.EMAIL_ERROR_BOX = this.page.locator('.error');
  }
}
