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
        this.isLoading = false;
    }

    $onInit() {
        this.isLoading = true;
        this.todo.getBoardLists(this.id)
                 .then(res => {
                     this.lists = res;
                     this.isLoading = false;
                 });
        this.todo.getBoardTitle(this.id)
                 .then(res => {
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
        this.$scope.$apply();
    }

}

export default {
    template,
    controller: Controller,
    $name: 'ttBoard'
}