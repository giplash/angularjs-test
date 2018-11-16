import template from './app.template.html';

class Controller {
    constructor($state) {
        this.isSignedIn = true;
        this.$state = $state;
    }

    $onInit() {
        // if (this.isSignedIn === false) {
        //     this.$state.go('app.auth');
        // } else {
        //     this.$state.go('app.cabinet');
        // }
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttApp'
}