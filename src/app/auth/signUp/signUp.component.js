import template from './signUp.template.html';

class Controller {
    constructor(auth) {
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.auth = auth;
    }

    onSubmit() {
        this.auth.signUp(this.email, this.password1)
            .then(console.log)
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignUp'
}