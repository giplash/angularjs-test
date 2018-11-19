import URL from './url';


export default class Todo {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getBoardTitle(boardId) {
        return this.$q((resolve, reject) => {
            setTimeout(() => {
                resolve('Test title');
            }, 500)
        });

        // return (
        //     this.$http
        //         .get(`${URL}/api/todo/board/${boardId}`)
        //         .then(res => res.title)
        // )
    }
    
    getBoardLists(boardId) {
        return this.$q((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        "id": 1,
                        "boardId": boardId,
                        "title": 'List 1',
                        "todo": [
                            {
                                "id": 238476238467,
                                "listId": 1,
                                "title": "Task 1",
                                "done": false
                            },
                            {
                                "id": 144134,
                                "listId": 1,
                                "title": "Task 2",
                                "done": true
                            },
                            {
                                "id": 12545234,
                                "listId": 1,
                                "title": "Task 3",
                                "done": false
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "boardId": boardId,
                        "title": 'List 2',
                        "todo": [
                            {
                                "id": 5345623,
                                "listId": 2,
                                "title": "Task 4",
                                "done": true
                            },
                            {
                                "id": 645645,
                                "listId": 2,
                                "title": "Task 5",
                                "done": true
                            },
                            {
                                "id": 3252345,
                                "listId": 2,
                                "title": "Task 6",
                                "done": false
                            }
                        ]
                    }
                ]);
            }, 700);
        })

        // return (
        //     this.$http
        //         .get(`${URL}/api/todo/list/${boardId}`)
        // )
    }

    

}

Todo.$name = 'todo';