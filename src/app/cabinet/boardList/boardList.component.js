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
}

export default {
    template,
    controller: Controller,
    $name: 'ttBoardList'
}