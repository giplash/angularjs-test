import template from './signIn.template.html';

class Controller {
    constructor(auth) {
        this.email = '';
        this.password = '';
        this.auth = auth;
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignIn'
}