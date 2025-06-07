import { test, expect } from '@playwright/test';

test('Verify that user able log into Swag labs with valid username and password', async ({ page }) => {
     
    const creds = {
        username : "standard_user",
        password : "secret_sauce"
     }
    // Navigate to the Swag Labs login page
    await page.goto('https://www.saucedemo.com/');
    
    // Enter the username and password
    await page.locator("//input[@data-test='username']").fill(creds.username);
    await page.locator("//input[@data-test='password']").fill(creds.password);
    
    // Click the login button
    await page.click('#login-button');
    
    // Verify that the user is redirected to the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    // Verify that the inventory page contains a specific product
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
    // Verify that the user can add a product to the cart
});


test('Verify that user is unable to log into Swag Labs with invalid username and password', async ({ page }) => {

    // Navigate to the Swag Labs login page
    await page.goto('https://www.saucedemo.com/');
    
    // Enter an invalid username and password
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'invalid_password');
    
    // Click the login button
    await page.click('#login-button');
    
    // Verify that an error message is displayed
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    
    // Verify that the user is still on the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
    await page.close();
})