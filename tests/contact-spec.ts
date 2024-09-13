import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('page-contact', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('http://localhost:4200/contact'); // 3
 
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4
 
    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});