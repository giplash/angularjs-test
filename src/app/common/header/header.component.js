import template from './header.template.html';
import './index.less';

class Controller {
    constructor(users, $state) {
        this.users = users;
        this.$state = $state;
    }

    handleLogout() {
        this.users.logout()
    }

    goHome() {
        this.$state.go('app.cabinet.boards');
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttHeader'
}