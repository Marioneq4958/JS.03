import { expect, type ProblemTest } from '@repo/testing';

const test: ProblemTest = {
  name: 'Przełączanie bloków',
  run: async ({ page, loadSolution }) => {
    await loadSolution();

    await page.locator('#przycisk-adres').click();
    await expect(page.locator('#blok-klient')).toBeNonVisible();
    await expect(page.locator('#blok-adres')).toBeVisible();
    await expect(page.locator('#blok-kontakt')).toBeNonVisible();

    await page.locator('#przycisk-kontakt').click();
    await expect(page.locator('#blok-klient')).toBeNonVisible();
    await expect(page.locator('#blok-adres')).toBeNonVisible();
    await expect(page.locator('#blok-kontakt')).toBeVisible();

    await page.locator('#przycisk-klient').click();
    await expect(page.locator('#blok-klient')).toBeVisible();
    await expect(page.locator('#blok-adres')).toBeNonVisible();
    await expect(page.locator('#blok-kontakt')).toBeNonVisible();
  },
};

export default test;
