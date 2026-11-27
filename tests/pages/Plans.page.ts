import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class PlansPage extends BasePage {
  public readonly CORPORATE_PLAN_HEADING: Locator;
  public readonly PLAN_ENTRY: (planName: string) => Locator;
  public readonly PLAN_FEATURE: (planName: string, feature: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.url = 'https://st2016.inv.bg/settings/plan';
    this.title = 'Абонамент - QA Ground';
    this.CORPORATE_PLAN_HEADING = this.page.getByRole('heading', {
      name: 'Корпоративен',
      exact: true,
    });
    this.PLAN_ENTRY = (planName: string) =>
      this.page
        .locator('.plansv2entry')
        .filter({ has: this.page.getByRole('heading', { name: planName, exact: true }) });
    this.PLAN_FEATURE = (planName: string, feature: string) =>
      this.PLAN_ENTRY(planName).locator('.plansv2feature').filter({ hasText: feature });
  }
}
