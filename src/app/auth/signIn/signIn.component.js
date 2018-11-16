import template from './signIn.template.html';

class Controller {
    constructor(auth) {
        this.email = '';
        this.password = '';
        this.auth = auth;
    }

    handleSubmit() {
        this.auth.signIn(this.email, this.password)
            .then(console.log)
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignIn'
}