import template from './index.html';
import './index.less';

class Controller {
    constructor() {
    }

    $onInit() {
        console.log(this);
    }
}

export default {
    $name: 'board',
    template,
    controller: Controller,
    bindings: {
        boardData: '&',
        moveItem: '&'
    }
}