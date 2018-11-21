import template from './board.template.html';
import './index.less';

class Controller {
    constructor($state,  $stateParams, todo, $scope) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.todo = todo;
        this.id = $stateParams.id;
        this.title = null;
        this.lists = [];
        this.newListTitle = '';
        this.isLoading = false;
    }

    $onInit() {
        this.isLoading = true;
        let completed1 = false, completed2 = false;
        this.todo.getBoardLists(this.id)
                 .then(res => {
                    completed1 = true
                    if (completed2 === true) {
                        this.isLoading = false;
                    }
                    this.lists = res;
                 });
        this.todo.getBoardTitle(this.id)
                 .then(res => {
                    completed2 = true
                    if (completed1 === true) {
                        this.isLoading = false;
                    }
                    this.title = res;
                 })
    }

    handleDrop(data, dropData) {
        const { id, listId } = data;
        const { id: newListId } = dropData;
        const oldList = this.lists.find(item => item.id === listId)
        const newList = this.lists.find(item => item.id === newListId);
        const item = oldList.todo.find(item => item.id === id);
        oldList.todo = oldList.todo.filter(item => item.id !== id);
        item.listId = newListId;
        newList.todo.push(item);
        this.todo.updateTask(id, newListId, item.title, item.done);
    }

    toggleStatus(id, listId) {
        const item = this.lists
                         .find(item => item.id === listId)
                         .todo
                         .find(item => item.id === id);
        const newStatus = !item.done;
        item.done = newStatus;
        this.todo.updateTask(id, listId, item.title, newStatus);
    }

    updateTaskTitle(id, listId) {
        const item = this.lists
                         .find(item => item.id === listId)
                         .todo
                         .find(item => item.id === id);
        this.todo.updateTask(id, listId, item.title, item.done);
    }

    removeList(listId) {
        this.lists = this.lists.filter(item => item.id !== listId);
        this.todo.removeList(listId);
    }

    removeTask(id, listId) {        
        const list = this.lists.find(item => item.id === listId);
        list.todo = list.todo.filter(item => item.id !== id);
        this.todo.removeTask(id);
    }

    addTask(listId, title) {
        if (title.length === 0) return;
        const list = this.lists.find(item => item.id === listId);
        const obj = {
            listId,
            title,
            id: this.todo.generateTaskId(this.lists),
            done: false
        };
        list.todo.push(obj);
        this.todo.addTask(listId, title)
                 .then(id => obj.id = id);
    }

    addList() {
        if (this.newListTitle.length === 0) return;
        const obj = {
            id: this.todo.generateListId(this.lists),
            title: this.newListTitle,
            todo: [],
            boardId: this.id
        };        
        this.lists.push(obj);
        this.todo.addList(this.id, this.newListTitle)
                 .then(id => obj.id = id);
        this.newListTitle = '';
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttBoard'
}