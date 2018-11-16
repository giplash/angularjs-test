import template from './header.template.html';
import './index.less';

class Controller {
    constructor(auth) {
        this.auth = auth;
    }

    handleLogout() {
        this.auth.logout()
            .then(console.log)
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttHeader'
}