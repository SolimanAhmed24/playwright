import { expect } from "@playwright/test";
import { Navigation } from "./Navigation.js";  


export class ProductsPage {
   constructor(page) {
      this.page = page;
      this.addButtons = page.locator("[data-qa='product-button']");
      this.sortDropDown = page.locator("[data-qa='sort-dropdown']")
      
   }
   async visit() {


      await this.page.goto("http://host.docker.internal:2221");
   }




   async addProductToBasket(index) {

      

      await expect(this.addButtons.nth(index)).toHaveText("Add to Basket");

      const navigation = new Navigation(this.page);

      const basketCountBeforAdding = await navigation.getBasketCount();

      await this.addButtons.nth(index).click();


      await expect(this.addButtons.nth(index)).toHaveText("Remove from Basket");
      const basketCountAfterAdding = await navigation.getBasketCount();

      expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforAdding);

   }

   async sortByCheapest(){

          await this.sortDropDown.selectOption("price-asc");
         


   }


}