import template from './board.template.html';
import './index.less';

class Controller {
    constructor() {
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