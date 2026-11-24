import { Page, BrowserContext } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/invoices/new';
    this.title = 'Нова фактура - QA Ground';
  }
}
