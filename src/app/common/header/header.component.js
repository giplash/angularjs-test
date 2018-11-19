import template from './header.template.html';
import './index.less';

class Controller {
    constructor(users) {
        this.users = users;
    }

    handleLogout() {
        this.users.logout()
            .then(console.log)
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttHeader'
}