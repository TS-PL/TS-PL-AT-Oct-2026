import { Page, BrowserContext } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/clients/manage/';
    this.title = 'Клиенти - QA Ground';
  }
}
