import template from './signUp.template.html';

class Controller {
    constructor(users, $state) {
        this.$state = $state;
        this.email = '';
        this.password1 = '';
        this.password2 = '';
        this.users = users;
        this.isLoading = false;
        this.errors = [];
    }

    showErrors() {
        alert(this.errors.map(item => item.description).join('\n'))
    }

    onSubmit() {
        if (this.form.$valid === false) return;
        this.isLoading = true;
        this.users.signUp(this.email, this.password1)
            .then(res => {
                this.isLoading = false;
                const { succeeded, errors } = res.data;
                this.errors = errors;
                if (succeeded === false) {
                    this.showErrors();
                    return;
                }
                this.$state.go('app.auth.signIn');                
            })
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignUp'
}