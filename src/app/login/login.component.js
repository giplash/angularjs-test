import template from './login.template.html';
import './index.less';

class Controller {
    constructor($state) {
        this.$state = $state;
    }

    $onInit() {
        this.$state.go('app.login.signIn');
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttLogin'
}