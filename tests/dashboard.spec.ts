import { expect, test } from "@playwright/test";

test("ホームからダッシュボードへ正しく遷移できる", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("text=Dashboardへ");
  await expect(page).toHaveURL("http://localhost:3000/dashboard");
  await expect(page.locator("h1")).toContainText("Dashboard");
});
