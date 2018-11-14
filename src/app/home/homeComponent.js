import template from './index.html';
import angular from 'angular';
import './index.less';

class Controller {
    constructor($scope) {
        this.$scope = $scope;
        this.boards = [
            {
                id: 1,
                items: [
                    {
                        boardId: 1,
                        id: 'qewr',
                        text: 'text 1'
                    },
                    {
                        boardId: 1,
                        id: 'qeasdfwr',
                        text: 'text 2'
                    },
                    {
                        boardId: 1,
                        id: 'kjnk',
                        text: 'text 3'
                    },
                ]
            },
            {
                id: 2,
                items: [
                    {
                        boardId: 2,
                        id: 'jghj',
                        text: 'text 4'
                    },
                    {
                        boardId: 2,
                        id: 'kjgju',
                        text: 'text 5'
                    }
                ]
            }
        ];
    }

    moveItem(oldBoardId, newBoardId, itemId) {
        if (oldBoardId == newBoardId) {
            return;
        }
        const oldBoard = this.boards.find(item => item.id == oldBoardId);
        const newBoard = this.boards.find(item => item.id == newBoardId);
        const item = oldBoard.items.find(item => item.id == itemId);
        item.boardId = newBoardId;
        newBoard.items.push(item);
        oldBoard.items = oldBoard.items.filter(item => item.id != itemId);
        this.$scope.$digest();
    }
}

export default {
    template, 
    controller: Controller,
    $name: 'home'
}