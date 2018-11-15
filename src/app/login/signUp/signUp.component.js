import template from './signUp.template.html';

class Controller {
    constructor(login) {
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.login = login;
    }

    onSubmit() {
        this.login.signUp(this.email, this.password1);
    }

    $onInit() {
        console.log(this.signUpForm);
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttSignUp'
}