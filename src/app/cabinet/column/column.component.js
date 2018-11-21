import template from'./column.template.html';

class Controller {
    constructor() {
        this.newTaskTitle = '';
    }

    addTaskWrapper() {
        this.addTask({listId: this.list.id, title: this.newTaskTitle});
        this.newTaskTitle = '';
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
        removeTask: '&',
        addTask: '&',
        addList: '&'
    }
}