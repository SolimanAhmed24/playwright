import { expect } from "@playwright/test";

export class Checkout {

    constructor(page) {

        this.page = page;
        this.basketCards = page.locator("[data-qa='basket-card']");
        this.basketItemPrice = page.locator("[data-qa='basket-item-price']");
        this.basketItemRemoveButton = page.locator("[data-qa='basket-card-remove-item']");



    }

    async removeCheapestProduct() {


        const itemsBeforeRemoval = await this.basketCards.count();
        const allPriceTexts = await this.basketItemPrice.allInnerTexts();

        const justNumbers = allPriceTexts.map((element) => {

            const withoutDollarSign = element.replace("$", "")
            return parseInt(withoutDollarSign, 10);

        })

        const smallestPrice = Math.min(...justNumbers);
        const smallestPriceIdx = justNumbers.indexOf(smallestPrice);

        await this.basketItemRemoveButton.nth(smallestPriceIdx).click();



        await expect(this.basketCards).toHaveCount(itemsBeforeRemoval - 1)

    }


    async continueToCheckout() {

        await this.page.getByRole("button", { name: 'Continue to Checkout' }).click();
        await this.page.waitForURL(/\/login/);




    }


}

