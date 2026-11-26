import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class HomePage extends BasePage {
  public readonly NEW_INVOICE_BUTTON: Locator;
  public readonly CLIENTS_BUTTON: Locator;
  public readonly ARTICLES_BUTTON: Locator;
  public readonly USER_PANEL_BUTTON: Locator;
  public readonly DOCUMENTS_BUTTON: Locator;
  public readonly EXIT_BUTTON: Locator;
  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/';
    this.title = 'Система за фактуриране - QA Ground';

    this.NEW_INVOICE_BUTTON = this.page.getByRole('link', { name: 'Нова Фактура', exact: true });
    this.CLIENTS_BUTTON = this.page.getByRole('link', { name: 'Клиенти', exact: true });
    this.ARTICLES_BUTTON = this.page.getByRole('link', { name: 'Артикули', exact: true });
    this.USER_PANEL_BUTTON = this.page.locator('#userpanel');
    this.DOCUMENTS_BUTTON = this.page.getByRole('link', { name: 'Документи'});
    this.EXIT_BUTTON = this.page.getByRole('link', { name: 'Изход' });
  }
}
