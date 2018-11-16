import template from './signUp.template.html';

class Controller {
    constructor(auth) {
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.login = auth;
    }

    onSubmit() {
        this.auth.signUp(this.email, this.password1);
    }
    
}

export default {
    template,
    controller: Controller,
    $name: 'ttSignUp'
}