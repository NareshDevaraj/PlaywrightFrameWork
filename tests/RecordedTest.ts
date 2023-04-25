import { test, expect } from '@playwright/test';


//Using CodeGen -- npx playwright codegen
//same test as Login test
test('Login and LogOut test using CodeGen', async ({ page }) => {
  //login to the page
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  //Mouse over on my account
  const MyAccount = page.getByRole('button', { name: ' My account' }); 
  await MyAccount.hover();

  //click on login button
  await page.getByRole('link', { name: 'Login' }).click();
  // Validate loaded url 
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  // Entering email address
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');

  //Entering password after click
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass123$');

  //click login button
  await page.getByRole('button', { name: 'Login' }).click();

  //click edit information button
  await page.getByRole('link', { name: ' Edit your account information' }).click();

  //validate the url after logout
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

  
  //click first name
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('Last Name').click();

  //edit last name
  await page.getByPlaceholder('Last Name').fill('TestA');

  //click continue button
  await page.getByRole('button', { name: 'Continue' }).click();


  //click my account 
  await page.getByRole('button', { name: ' My account' }).click();
  
  //Mouse over on my account
  await MyAccount.hover();
  //await page.waitForTimeout(1000);  // wait is to validate

  //click logout
  await page.getByRole('link', { name: 'Logout', exact: true }).click();

  //validate the url after logout
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');

});