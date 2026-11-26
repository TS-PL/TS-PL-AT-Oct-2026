import { test } from '@tests/fixtures';
import { Page, expect } from '@playwright/test';
import DocumentsPage from '@tests/pages/Documents.page';
import path from 'path';
import projectDir from '@tests/resources/enums/projectDir';

export default class DocumentSteps {
  public readonly page: Page;
  public readonly documentsPage: DocumentsPage;

  constructor(page: Page, documentsPage: DocumentsPage) {
    this.page = page;
    this.documentsPage = documentsPage;
  }

  async clickUploadDocumentButton() {
    await test.step('Click Upload Document Button', async () => {
      await this.documentsPage.UPLOAD_DOCUMENT_BUTTON.click();
      await expect(this.documentsPage.CHOOSE_FILE_BUTTON).toBeVisible();
    });
  }

  async uploadFile(fileName: string) {
    await test.step('Upload File', async () => {
      await this.documentsPage.CHOOSE_FILE_BUTTON.setInputFiles(
        path.join(projectDir, `tests/resources/files/${fileName}`),
      );
      await this.documentsPage.CREATE_BUTTON.click();
      await expect(this.documentsPage.MESSAGE_BOX).toHaveText(
        this.documentsPage.UPLOAD_SUCCESS_MESSAGE,
      );
    });
  }

  async deleteFile(fileName: string) {
    await test.step('Delete File', async () => {
      await this.documentsPage.DOCUMENTS_CHECKBOX(fileName).check();
      this.page.on('dialog', (dialog) => dialog.accept());
      await this.documentsPage.DELETE_BUTTON.click();
      await expect(this.documentsPage.MESSAGE_BOX).toHaveText(this.documentsPage.DELETE_SUCCESS_MESSAGE);
    });
  }
}
