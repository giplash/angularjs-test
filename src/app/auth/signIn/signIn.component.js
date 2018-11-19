import template from './signIn.template.html';

class Controller {
    constructor(users) {
        this.email = '';
        this.password = '';
        this.users = users;
    }

    handleSubmit() {
        this.users.signIn(this.email, this.password)
            .then(console.log)
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignIn'
}