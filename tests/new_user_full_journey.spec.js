import { test } from "@playwright/test"
import { v4 as uuidv4 } from 'uuid'

import { ProductsPage, Navigation, Checkout, LoginPage, RegisterPage, DeliveryDetails, PaymentPage } from "../page-objects"
import { UserAddress } from "../Data/UserAddress";
import { paymentDetails } from "../Data/paymentDetails";



test("New User Full Journey", async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.visit();

    await productsPage.sortByCheapest();



    await productsPage.addProductToBasket(0);
    await productsPage.addProductToBasket(1);
    await productsPage.addProductToBasket(2);

    const navigation = new Navigation(page)

    await navigation.goToCheckout();


    const checkout = new Checkout(page);

    await checkout.removeCheapestProduct();
    await checkout.continueToCheckout();

    const loginpage = new LoginPage(page);

    await loginpage.moveToSignUp();

    const registerPage = new RegisterPage(page);

    const email = uuidv4() + "@gmail.com";
    const password = uuidv4();

    await registerPage.signUpAsNewUser(email, password);

    const deliveryDetails = new DeliveryDetails(page);

    await deliveryDetails.fillDetails(UserAddress);

    await deliveryDetails.saveDetails();

    await deliveryDetails.continueToPayment();

    const paymentPage = new PaymentPage(page);

    await paymentPage.activateDiscount();

    await paymentPage.fillPaymentDetails(paymentDetails);














});