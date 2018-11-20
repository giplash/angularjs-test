import template from './app.template.html';

class Controller {
    constructor($state, $cookies) {
        this.isSignedIn = true;
        this.$state = $state;
        this.$cookies = $cookies;
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttApp'
}