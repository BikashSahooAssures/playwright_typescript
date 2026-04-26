import {test, expect, Locator} from "@playwright/test";

test("finding xpath locator", async ({page}) => {

    await page.goto("https://release.gensomsolar.com/login");
    const email:Locator = page.locator("//input[@formcontrolname='email' and @id='floatingInputValue']");
    const pass:Locator = page.locator("//input[@formcontrolname='password' and @placeholder='Password']");
    
    await expect(email).toBeVisible();
    await expect(pass).toBeVisible();

})