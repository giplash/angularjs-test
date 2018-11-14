import template from './index.html';
import './index.less';

class Controller {
    constructor() {
    }
}

export default {
    $name: 'boardItem',
    controller: Controller,
    template,
    bindings: {
        text: '@',
        itemId: '@',
        boardId: '@'
    }
}

