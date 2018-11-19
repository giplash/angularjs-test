import template from './signUp.template.html';

class Controller {
    constructor(users) {
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.users = users;
    }

    onSubmit() {
        this.users.signUp(this.email, this.password1)
            .then(console.log)
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignUp'
}