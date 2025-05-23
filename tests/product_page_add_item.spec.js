import { test, expect } from "@playwright/test"



test.skip("Product Page Add To Basket", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("localhost:2221");
    await expect(page.locator("[data-qa='header-basket-count']")).toHaveText("0");
    await page.locator("[data-qa='product-button']").first().click();


    await expect(page.locator("[data-qa='product-button']").first()).toHaveText("Remove from Basket");

    await expect(page.locator("[data-qa='header-basket-count']")).toHaveText("1");

    await page.getByRole("link", { name: "Checkout" }).click();
    await page.waitForURL("localhost:2221/basket");





})