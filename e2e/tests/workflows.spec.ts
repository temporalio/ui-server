import { test, expect, Page } from "@playwright/test";

const address = process.env.E2E_UI_ADDRESS ?? "";

test.beforeEach(async ({ page }) => {
  await page.goto(address);
});

test.describe("Workflows list", () => {
  test("should render Workflow Executions page", async ({ page }) => {
    await expect(page.locator("text=Recent Workflows")).toBeVisible();
  });

  test("should render Workflow Executions table", async ({ page }) => {
    await expect(page.locator("text=cronWorkflow").first()).toBeVisible();
  });

  test("should render Workflow Execution details", async ({ page }) => {
    await page.locator("text=temporal.canary.cron").first().click();

    await expect(page.locator("text=cronWorkflow").first()).toBeVisible();
    await expect(page.locator("text=canary-task-queue").first()).toBeVisible();
  });

  test("should render Workflow Execution Events", async ({ page }) => {
    await page.locator("text=temporal.canary.cron").first().click();

    await expect(page.locator("text=WorkflowTaskScheduled").first()).toBeVisible();
  });
});
