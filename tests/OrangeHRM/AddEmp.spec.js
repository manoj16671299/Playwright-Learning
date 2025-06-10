import { test, expect } from '@playwright/test';

const emplist = {
    emp1 : {firstname : "Manoj", lastname: "Sunkara"},
    emp2 : {firstname : "Phani", lastname: "varma"},
    emp3 : {firstname : "Arun", lastname: "tej"},
    emp4 : {firstname : "Harish", lastname: "Venugopal"},
}
for(let emp in emplist) {
test(`Add employee to OrangeHRM ${emplist[emp].firstname} ${emplist[emp].lastname}`, async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@type='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//a[@class='oxd-main-menu-item active']")).toBeVisible();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("//input[@placeholder='First Name']").fill(emplist[emp].firstname);
    await page.locator("//input[@placeholder='Last Name']").fill(emplist[emp].lastname);
    await page.locator("//button[@type='submit']").click();
});

}
