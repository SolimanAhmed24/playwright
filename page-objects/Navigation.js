export class Navigation {

    constructor(page) {

        this.page = page;

        this.basketCounter = page.locator("[data-qa='header-basket-count']");
        this.checkoutLink = page.getByRole("link", { name: "Checkout" });

    }

    async getBasketCount() {

        return parseInt(await this.basketCounter.innerText(), 10);

    }

    async goToCheckout(){
          
        await this.checkoutLink.click();
        

    }


}
