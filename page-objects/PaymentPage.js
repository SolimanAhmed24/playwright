import { expect } from "@playwright/test";

export class PaymentPage {

constructor(page){

this.page = page;

}

async activateDiscount(){

const discountCode = await this.page.frameLocator("[data-qa='active-discount-container']").locator("[data-qa='discount-code']").innerText();

await this.page.getByPlaceholder("Discount code").fill(discountCode);

await expect (this.page.getByPlaceholder("Discount code")).toHaveValue(discountCode);

await this.page.getByRole("button", {name: 'Submit discount'}).click();

await expect( this.page.locator("[data-qa='discount-active-message']")).toHaveText("Discount activated!");




}
async fillPaymentDetails(paymentDetails){

await this.page.locator("[data-qa='credit-card-owner']").fill(paymentDetails.creditCardOwner);
await this.page.locator("[data-qa='credit-card-number']").fill(paymentDetails.creditCardNumber);
await this.page.locator("[data-qa='valid-until']").fill(paymentDetails.validUntil);
await this.page.locator("[data-qa='credit-card-cvc']").fill(paymentDetails.creditCardCVC);
await this.page.getByRole("button",{name: 'Pay'}).click();
await expect(this.page.getByText("Thank you for shopping with us!")).toBeVisible();




}


}




