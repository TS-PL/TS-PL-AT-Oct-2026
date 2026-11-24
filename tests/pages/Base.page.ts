import { Page, BrowserContext } from '@playwright/test';

export default class BasePage {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public url: string;
  public title: string;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.url = '';
    this.title = '';
  }
}
