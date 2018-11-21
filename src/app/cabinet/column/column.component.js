import template from'./column.template.html';

class Controller {
    constructor() {
        this.newTaskTitle = '';
    }

    $onInit() {
        window.ctrl = this;
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttColumn',
    bindings: {
        list: '<',
        handleDrop: '&',
        toggleStatus: '&',
        updateTaskTitle: '&',
        removeList: '&',
        removeListItem: '&',
        addTask: '&',
        addList: '&'
    }
}