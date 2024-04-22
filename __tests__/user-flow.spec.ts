import { test } from '@playwright/test';

test('A new user registers', async ({
  page,
}) => {
  await page.goto('/sign-up');
});

test('An existing user logs in', async ({
  page,
}) => {
  await page.goto('/sign-in');
});
