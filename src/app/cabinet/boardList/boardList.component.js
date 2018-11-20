import template from './boardList.template.html';
import './index.less';

class Controller {
    constructor(users, $state) {
        this.users = users;
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
            console.log(this.boards);
        });
        
    }

    handleItemClick(id) {
        this.$state.go('app.cabinet.board-details', { id });
    }

    _generateBoardId() {
        let id = 0;
        do {
            id++;
        } while(this.boards.some(item => item.id === id));
        return id;
    }

    addBoard() {
        const { userId } = this.boards[0];
        this.boards.push({
            userId,
            title: this.newBoardTitle,
            id: this._generateBoardId()
        })
        this.newBoardTitle = '';
    }

    removeBoard(id) {
        this.boards = this.boards.filter(item => item.id !== id);
    }
}

export default {
    template,
    controller: Controller,
    $name: 'ttBoardList'
}