import {expect, test} from '@playwright/test';

test('Submit "Add new participant" form', async ({ page }) => {
  // First we navigate to the desired page.
  await page.goto('/');

  // We then fill the form fields
  await page.getByLabel('Name').fill('Drilon Buzuku');
  await page.getByLabel('E-Mail').fill('drilon.buzuk@moonshiner.at');

  // Now we submit the form.
  await page.getByRole('button', { name: 'Add' }).click();

  // After submitting the form, it clears out so these should be empty.
  await expect(page.getByLabel('Name')).toHaveValue('');
  await expect(page.getByLabel('E-Mail')).toHaveValue('');
});

test('Reset "Add new participant" form data', async ({
  page,
}) => {
  // First we navigate to the desired page.
  await page.goto('/');

  // We then fill the form fields
  await page.getByLabel('Name').fill('Drazen Bebic');
  await page.getByLabel('E-Mail').fill('drazen.bebic@moonshiner.at');

  // Now we reset the form.
  await page.getByRole('button', { name: 'Reset' }).click();

  // After resetting the form, it clears out so these should be empty.
  await expect(page.getByLabel('Name')).toHaveValue('');
  await expect(page.getByLabel('E-Mail')).toHaveValue('');
});


test('Reset all participants', async ({
  page,
}) => {
  // First we navigate to the desired page.
  await page.goto('/');

  // We now add a couple of participants.
  await page.getByLabel('Name').fill('Drilon Buzuku');
  await page.getByLabel('E-Mail').fill('drilon.buzuk@moonshiner.at');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByLabel('Name').fill('Drazen Bebic');
  await page.getByLabel('E-Mail').fill('drazen.bebic@moonshiner.at');
  await page.getByRole('button', { name: 'Add' }).click();

  // Now we reset all participant data.
  await page.getByRole('button', { name: 'Reset all participants' }).click();
});
