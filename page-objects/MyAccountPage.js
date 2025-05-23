export class MyAccountPage {

constructor(page){

this.page = page;



}


async visit(){

await this.page.goto("http://localhost:2221/my-account");



}




}