const URL_BASE = 'https://localhost:44310';

export default class Auth {
    constructor($http) {
        this.$http = $http;
    }

    signUp(email, password) {
        const data = JSON.stringify({
            email,
            password
        })

        return (
            this.$http
                .post(`${URL_BASE}/api/users/register`, data)
        )
    }

    signIn(email, password) {
        const data = JSON.stringify({
            email,
            password
        });

        return (
            this.$http
                .post(`${URL_BASE}/api/users/login`, data)
        )

    }

    logout() {
        return (
            this.$http
                .post(`${URL_BASE}/api/users/logout`)
        )
    }
}

Auth.$name = 'auth';