import {test, expect} from "@playwright/test"


test("first demo", async ({page})=>{
  await page.goto("https://release.gensomsolar.com/login")


  await expect(page).toHaveTitle("login")
  let title: string = await page.title()
  console.log(title)



})