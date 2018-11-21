import URL from './url';


export default class Todo {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    generateBoardId(boards) {
        let id = 0;
        do {
            id++;
        } while(boards.some(item => item.id === id));
        return id;
    }

    generateListId(lists) {
        let id = 0;
        do {
            id++;
        } while (lists.some(item => item.id === id));
        return id;
    }

    generateTaskId(lists) {
        let id = 0;
        do {
            id++;
        } while (lists.some(item => item.todo.some(item => item.id === id)));
        return id;
    }

    getBoardTitle(boardId) {
        return (
            this.$http
                .get(`${URL}/api/todo/board/${boardId}`, {
                    withCredentials: true
                })
                .then(res => res.data.title)
        )
    }
    
    getBoardLists(boardId) {
        return (
            this.$http
                .get(`${URL}/api/todo/list/${boardId}`, {
                    withCredentials: true
                })
                .then(res => res.data)
        )
    }

    addBoard(title) {
        return (
            this.$http.post(`${URL}/api/todo/board`, {
                title
            }, {
                withCredentials: true
            }).then(res => res.data)
        )
    }

    removeBoard(boardId) {
        return (
            this.$http.delete(`${URL}/api/todo/board/${boardId}`, {
                withCredentials: true
            })
        )
    }

    addList(boardId, title) {
        return (
            this.$http.post(`${URL}/api/todo/list/${boardId}`, {
                title,
                boardId
            }, {
                withCredentials: true
            }).then(res => res.data)
        )
    }
    
    removeList(listId) {
        return (
            this.$http.delete(`${URL}/api/todo/list/${listId}`, {
                withCredentials: true
            })
        )
    }


    addTask(listId, title) {
        return (
            this.$http.post(`${URL}/api/todo/event/${listId}`, {
                title,
                listId
            }, {
                withCredentials: true
            }).then(res => res.data)
        )
    }   

    removeTask(id) {
        return (
            this.$http.delete(`${URL}/api/todo/event/${id}`, {
                withCredentials: true
            })
        )
    }

    updateTask(id, listId, title, status) {
        return (
            this.$http.put(`${URL}/api/todo/event/`, {
                id,
                listId,
                title,
                done: status
            }, {
                withCredentials: true
            }).then(res => res.data)
        )
    }

}

Todo.$name = 'todo';