import { test, expect } from '@playwright/test';

test('open amazon homepage', async ({ page }) => {
  // Amazon ki website open karo
  await page.goto('https://www.amazon.com');

  // Title check karo (optional assertion)
  await expect(page).toHaveTitle(/Amazon/);

  // Thoda ruk ke dekho (optional)
  await page.waitForTimeout(3000);
});