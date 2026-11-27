import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {
  public readonly UPGRADE_PLAN_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/invoices/new';
    this.title = 'Нова фактура - QA Ground';
    this.UPGRADE_PLAN_LINK = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
    });
  }
}
