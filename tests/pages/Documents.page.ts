import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class DocumentsPage extends BasePage {
  public readonly UPLOAD_SUCCESS_MESSAGE: string;
  public readonly DELETE_SUCCESS_MESSAGE: string;

  public readonly UPLOAD_DOCUMENT_BUTTON: Locator;
  public readonly CHOOSE_FILE_BUTTON: Locator;
  public readonly CREATE_BUTTON: Locator;
  public readonly MESSAGE_BOX: Locator;
  public readonly DOCUMENTS_CHECKBOX: (fileName: string) => Locator;
  public readonly DELETE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/documents';
    this.title = 'Документи - QA Ground';
    this.UPLOAD_SUCCESS_MESSAGE = 'Файлът е качен успешно.';
    this.DELETE_SUCCESS_MESSAGE = 'Избраните файлове/папки бяха перманентно изтрити.';

    this.UPLOAD_DOCUMENT_BUTTON = this.page.locator('.selenium-new-doc');
    this.CHOOSE_FILE_BUTTON = this.page.locator('.selenium-file-input');
    this.CREATE_BUTTON = this.page.getByRole('button', { name: 'Създай' });
    this.MESSAGE_BOX = this.page.locator('#okmsg');
    this.DOCUMENTS_CHECKBOX = (fileName: string) => {
      return this.page.getByRole('row', { name: fileName }).getByRole('checkbox');
    };
    this.DELETE_BUTTON = this.page.locator('#storagebtn_del');
  }

  // documentCheckbox(fileName: string): Locator {
  //   return this.page.getByRole('row', { name: fileName }).getByRole('checkbox');
  // }
}
