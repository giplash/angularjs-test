import template from './app.template.html';

class Controller {
    constructor($state) {
        this.isSignedIn = true;
        this.$state = $state;
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttApp'
}