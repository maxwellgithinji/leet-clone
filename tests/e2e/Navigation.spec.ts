import { faker } from '@faker-js/faker';
import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the auth page', async ({ page }) => {
      await page.goto('/auth');

      await expect(
        page.getByRole('button', {
          name: 'Login',
        }),
      ).toBeVisible();

      // Take snapshot of the auth page
      await percySnapshot(page, 'Auth Page');
    });

    test('should navigate to the homepage after successful login', async ({
      page,
    }) => {
      await page.goto('/auth');

      // Clicking the login button to open the modal
      await page.click('button[name="navbaropenloginmodal-button"]');

      // Assuming the modal is now visible, you might want to wait for it to appear
      await page.waitForSelector('.modal-container'); // uses the class name modal-container

      // Filling out the login form
      await page.fill('input[name="email"]', 'test@user.com');
      await page.fill('input[name="password"]', 'test123');

      // Clicking the login button
      await page.click('button[name="submitlogin-button"]');

      // Wait for the homepage to load
      await page.waitForSelector('.home');

      await expect(
        page.getByText('QUALITY OVER QUANTITY'), // Content only visible on the homapage
      ).toBeVisible();

      // Take a screenshot of the homepage
      await percySnapshot(page, 'Home Page');
    });

    test('should navigate to the homepage after successful sign up', async ({
      page,
    }) => {
      await page.goto('/auth');

      // Clicking the login button to open the modal
      await page.click('button[name="navbaropenloginmodal-button"]');

      // Assuming the modal is now visible, you might want to wait for it to appear
      await page.waitForSelector('.modal-container'); // uses the class name modal-container

      // Clicking Sign Up Today to open signup
      await page.click('button[name="signuptodaylink-button"]');

      // Using faker to generate a random email
      const randomEmail = faker.internet.email();
      const randomDisplayName = faker.person.suffix();
      const randomPassword = faker.animal.cetacean();

      // Filling out the sign-up form
      await page.fill('input[name="email"]', randomEmail);
      await page.fill('input[name="displayName"]', randomDisplayName);
      await page.fill('input[name="password"]', randomPassword);

      // Clicking the sign-up button
      await page.click('button[name="submitsignup-button"]');

      // Wait for the homepage to load
      await page.waitForSelector('.home');

      await expect(
        page.getByText('QUALITY OVER QUANTITY'), // Content only visible on the homapage
      ).toBeVisible();

      // Take a screenshot of the homepage
      await percySnapshot(page, 'Home Page');
    });
  });
});
