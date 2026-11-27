import { expect, Page } from '@playwright/test';
import { test } from '@tests/fixtures';
import ClientsPage from '@tests/pages/Clients.page';

export default class ClientsSteps {
  public readonly page: Page;
  public readonly clientsPage: ClientsPage;

  constructor(page: Page, clientsPage: ClientsPage) {
    this.page = page;
    this.clientsPage = clientsPage;
  }

  async clearClientsIfAtLimit(): Promise<boolean> {
    return test.step('Clear all clients when the five-client limit is reached', async () => {
      const clientCount = await this.clientsPage.CLIENT_ROWS.count();
      if (clientCount !== 5) {
        return false;
      }

      for (let index = 0; index < clientCount; index++) {
        const clientName = await this.clientsPage.CLIENT_ROWS.nth(index)
          .getByRole('link')
          .first()
          .innerText();
        await this.clientsPage.CLIENT_CHECKBOX(clientName).check();
      }

      await this.clientsPage.DELETE_BUTTON.click();
      await expect(this.clientsPage.DELETE_CONFIRM_BUTTON).toBeVisible();
      await this.clientsPage.DELETE_CONFIRM_BUTTON.click();
      await expect(this.clientsPage.SUCCESS_MESSAGE).toContainText(/успеш/i);
      await expect(this.clientsPage.CLIENT_ROWS).toHaveCount(0);
      return true;
    });
  }

  async openNewClientForm(): Promise<void> {
    await test.step('Open new client form', async () => {
      await this.clientsPage.NEW_CLIENT_BUTTON.click();
      await expect(this.clientsPage.CLIENT_NAME_INPUT).toBeVisible();
    });
  }

  async createClient(clientName: string): Promise<void> {
    await test.step('Create client', async () => {
      await this.clientsPage.CLIENT_NAME_INPUT.fill(clientName);
      await this.clientsPage.SAVE_BUTTON.click();
      await expect(this.clientsPage.SUCCESS_MESSAGE).toContainText(/успеш/i);
    });
  }

  async openClientsList(): Promise<void> {
    await test.step('Open clients list', async () => {
      await this.clientsPage.CLIENTS_LIST_LINK.click();
      await expect(this.page).toHaveURL(this.clientsPage.url);
      await expect(this.page).toHaveTitle(this.clientsPage.title);
      await expect(this.clientsPage.CLIENTS_LIST_LINK).toBeVisible();
    });
  }

  async verifyClientRemains(clientName: string): Promise<void> {
    await test.step('Verify the new client remains below the five-client limit', async () => {
      await expect(this.clientsPage.CLIENT_ROW(clientName)).toBeVisible();
    });
  }
}
