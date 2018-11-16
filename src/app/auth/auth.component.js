import template from './auth.template.html';
import './index.less';

class Controller {
    constructor($state) {
        this.$state = $state;
    }

    $onInit() {
        this.$state.go('app.auth.signIn');
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttAuth'
}