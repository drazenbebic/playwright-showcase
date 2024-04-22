import { test } from '@playwright/test';

test('Submit "Add new participant" form', async ({
  page,
}) => {
  await page.goto('/');
});

test('Reset "Add new participant" form data', async ({
  page,
}) => {
  await page.goto('/');
});
