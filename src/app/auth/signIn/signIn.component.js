import template from './signIn.template.html';

class Controller {
    constructor(users, $state, $cookies) {
        this.$state = $state;
        this.$cookies = $cookies;
        this.users = users;
        this.email = '';
        this.password = '';
        this.isLoading = false;
    }

    showError(text) {
        alert(text)
    }

    handleSubmit() {
        if (this.form.$valid === false) return;        
        this.isLoading = true;
        this.users.signIn(this.email, this.password)
            .then(res => {
                this.isLoading = false;
                const { cookieValue } = res.data;
                const { succeeded } = res.data.result;
                if (succeeded === false) {
                    this.showError('There is no user with these email and password');
                    return;
                }
                this.$cookies.put('Auth_Cookie', cookieValue);
                this.$state.go('app.cabinet.boards');
            })
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttSignIn'
}