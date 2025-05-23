export class LoginPage {

constructor (page){

this.page = page;

}

async moveToSignUp(){

await this.page.locator("[data-qa='go-to-signup-button']").click();



}



}