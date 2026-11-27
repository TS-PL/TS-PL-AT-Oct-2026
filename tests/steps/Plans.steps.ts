import { expect, Page } from '@playwright/test';
import { test } from '@tests/fixtures';
import NewInvoicePage from '@tests/pages/New.Invoice.page';
import PlansPage from '@tests/pages/Plans.page';

export default class PlansSteps {
  public readonly page: Page;
  public readonly newInvoicePage: NewInvoicePage;
  public readonly plansPage: PlansPage;

  constructor(page: Page, newInvoicePage: NewInvoicePage, plansPage: PlansPage) {
    this.page = page;
    this.newInvoicePage = newInvoicePage;
    this.plansPage = plansPage;
  }

  async openPlansPage(): Promise<void> {
    await test.step('Open payment plans', async () => {
      await this.newInvoicePage.UPGRADE_PLAN_LINK.click();
      await expect(this.page).toHaveURL(/\/settings\/plan\/?$/);
      await expect(this.plansPage.CORPORATE_PLAN_HEADING).toBeVisible();
    });
  }

  async verifyPlanDetails(plan: {
    name: string;
    price: string;
    clients: string;
    invoices: string;
    employees: string;
    features: string[];
  }): Promise<void> {
    await test.step(`Verify ${plan.name} plan`, async () => {
      const planEntry = this.plansPage.PLAN_ENTRY(plan.name);

      await expect(planEntry).toContainText(plan.price);
      await expect(planEntry).toContainText(plan.clients);
      await expect(planEntry).toContainText(plan.invoices);
      await expect(planEntry).toContainText(plan.employees);
      for (const feature of plan.features) {
        await expect(this.plansPage.PLAN_FEATURE(plan.name, feature)).toBeVisible();
      }
    });
  }
}
