import template from './task.template.html';

class Controller {
    constructor() {}
}

export default {
    template,
    controller: Controller,
    $name: 'ttTask',
    bindings: {
        todo: '<',
        toggleStatus: '&',
        updateTaskTitle: '&',
        removeListItem: '&'
    }
}