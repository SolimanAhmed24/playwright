import { expect } from "@playwright/test";
import { UserAddress } from "../Data/UserAddress";

export class DeliveryDetails {

    constructor(page) {


        this.page = page;

    }

    async fillDetails(UserAddress) {

        await this.page.getByPlaceholder("First name").fill(UserAddress.firstName);
        await this.page.getByPlaceholder("Last name").fill(UserAddress.lastName);
        await this.page.getByPlaceholder("Street").fill(UserAddress.street);
        await this.page.getByPlaceholder("Post code").fill(UserAddress.postCode);
        await this.page.getByPlaceholder("City").fill(UserAddress.city);
        await this.page.locator("[data-qa='country-dropdown']").selectOption(UserAddress.country);

        


    }

    async saveDetails() {

        const addressCountBeforeSaving = await this.page.locator("[data-qa='saved-address-container']").count();

        await this.page.getByRole("button", { name: 'Save address for next time' }).click();
        await expect(this.page.locator("[data-qa='saved-address-container']")).toHaveCount(addressCountBeforeSaving + 1);
        await expect(this.page.locator("[data-qa='saved-address-firstName']").first()).toHaveText(UserAddress.firstName);


    }


    async continueToPayment() {

        await this.page.getByRole("button", {name: 'Continue to payment'}).click();

        



        
    }

}