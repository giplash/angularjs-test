import template from './signIn.template.html';

class Controller {
    constructor(login) {
        this.email = '';
        this.password = '';
        this.login = login;
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignIn'
}