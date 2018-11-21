import template from './boardList.template.html';
import './index.less';

class Controller {
    constructor(users, todo, $state) {
        this.users = users;
        this.todo = todo;
        this.$state = $state;
        this.newBoardTitle = '';
        this.boards = [];
        this.isLoading = false;
    }

    $onInit() {
        this.isLoading = true;
        this.users.getBoards().then(res => {
            this.isLoading = false;
            this.boards = res;
        });
        
    }

    handleItemClick(id) {
        this.$state.go('app.cabinet.board-details', { id });
    }
   

    addBoard() {
        if (this.newBoardTitle.length === 0) return;
        const obj = {
            id: this.todo.generateBoardId(this.boards),
            title: this.newBoardTitle
        }
        this.boards.push(obj)
        this.newBoardTitle = '';
        this.todo.addBoard(obj.title)
                 .then(id => {
                     obj.id = id;
                 });
    }

    removeBoard(id) {
        this.boards = this.boards.filter(item => item.id !== id);
        this.todo.removeBoard(id);
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttBoardList'
}