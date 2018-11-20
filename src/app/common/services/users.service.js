import URL from './url';

export default class Users {
    constructor($http, $q, $cookies, $state) {
        this.$http = $http;
        this.$q = $q;
        this.$cookies = $cookies;
        this.$state = $state;
    }

    signUp(email, password) {
        const data = JSON.stringify({
            email,
            password
        })

        return (
            this.$http
                .post(`${URL}/api/users/register`, data)
        )
    }

    signIn(email, password) {
        const data = JSON.stringify({
            email,
            password
        });

        return (
            this.$http
                .post(`${URL}/api/users/login`, data)
        )

    }

    logout() {
        this.$cookies.remove('Auth_Cookie');
        this.$state.go('app.auth');
    }

    getBoards() {
        return this.$q((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        userId: 1,
                        title: 'Board 1'
                    },
                    {
                        id: 2,
                        userId: 1,
                        title: 'Board 2'
                    },
                    {
                        id: 3,
                        userId: 1,
                        title: 'Board 3'
                    },
                    {
                        id: 4,
                        userId: 1,
                        title: 'Board 5'
                    }
                ]);
            }, 700);
        })
        return (
            this.$http
                .get(`${URL}/api/users/boards`)
        )
    }
}

Users.$name = 'users';