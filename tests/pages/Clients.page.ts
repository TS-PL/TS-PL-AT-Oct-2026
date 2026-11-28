import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;
  public readonly DELETE_BUTTON: Locator;
  public readonly DELETE_CONFIRM_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;
  public readonly CLIENT_CHECKBOX: (clientName: string) => Locator;
  public readonly CLIENT_ROW: (clientName: string) => Locator;
  public readonly CLIENT_ROWS: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/clients/manage';
    this.title = 'Клиенти - QA Ground';

    this.NEW_CLIENT_BUTTON = this.page.getByText(/нов клиент/i).first();
    this.CLIENT_NAME_INPUT = this.page.getByLabel('Име');
    this.SAVE_BUTTON = this.page.getByRole('button', {
      name: 'Създай клиент и отвори профила',
      exact: true,
    });
    this.CLIENTS_LIST_LINK = this.page.getByRole('link', {
      name: /списък клиенти/i,
    });
    this.DELETE_BUTTON = this.page.getByRole('link', { name: 'Изтрий', exact: true });
    this.DELETE_CONFIRM_BUTTON = this.page
      .getByRole('button', { name: /изтр|потвърди|да/i })
      .last();
    this.SUCCESS_MESSAGE = this.page.locator('#okmsg');
    this.CLIENT_ROW = (clientName: string) =>
      this.page.getByRole('row').filter({ hasText: clientName });
    this.CLIENT_CHECKBOX = (clientName: string) =>
      this.CLIENT_ROW(clientName).getByRole('checkbox');
    this.CLIENT_ROWS = this.page
      .locator('#clients_form tr')
      .filter({ has: this.page.locator('a[href*="/clients/manage/view/"]') });
  }
}
