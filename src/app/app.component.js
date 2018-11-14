import template from './app.template.html';

class Controller {
    constructor() {
        this.isSignedIn = true;
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttApp'
}