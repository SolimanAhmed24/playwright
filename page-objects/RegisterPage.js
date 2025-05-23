

export class RegisterPage{

constructor(page){

this.page = page;


}

async signUpAsNewUser(email, password){

await this.page.getByPlaceholder("E-Mail").fill(email);
await this.page.getByPlaceholder("Password").fill(password);
await this.page.getByRole("button", {name: 'Register'}).click();



}



}