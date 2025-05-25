export class MyAccountPage {

constructor(page){

this.page = page;



}


async visit(){

await this.page.goto("http://host.docker.internal:2221/login?redirect=/my-account");



}




}