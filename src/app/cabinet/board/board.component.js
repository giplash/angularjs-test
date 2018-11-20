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
        this.newTasks = {};
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
                    this.lists.forEach(item => {
                        this.newTasks[item.id] = {
                            id: item.id,
                            value: ''
                        };
                    })

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
    }

    toggleStatus(id, listId) {
        const item = this.lists
                         .find(item => item.id === listId)
                         .todo
                         .find(item => item.id === id);
        item.done = !item.done;
    }

    removeList(listId) {
        this.lists = this.lists.filter(item => item.id !== listId);
        delete this.newTasks[listId];
    }

    removeListItem(id, listId) {        
        const list = this.lists.find(item => item.id === listId);
        list.todo = list.todo.filter(item => item.id !== id);        
    }

    _generateTaskId(listId) {
        let id = 0;
        do {
            id++;
        } while (this.lists.some(item => item.todo.some(item => item.id === id)));
        return id;
    }

    _generateListId(listId) {
        let id = 0;
        do {
            id++;
        } while (this.lists.some(item => item.id === id));
        return id;
    }

    addTask(listId) {
        const title = this.newTasks[listId].value;
        if (title.length === 0) return;
        const list = this.lists.find(item => item.id === listId);
        list.todo.push({
            listId,
            title,
            id: this._generateTaskId(listId),
            done: false
        })
        this.newTasks[listId].value = '';
    }

    addList() {
        if (this.newListTitle.length === 0) return;
        this.lists.push({
            id: this._generateListId(),
            title: this.newListTitle,
            todo: [],
            boardId: this.id
        })
        this.newListTitle = '';
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttBoard'
}