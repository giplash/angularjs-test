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

        return this.$http
                .post(`${URL_BASE}/api/users/register`, data)
    }
}

Auth.$name = 'auth';