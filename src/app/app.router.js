import loginComponent from "./login/login.component";

export default function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'app'
        })
        .state({
            name: 'app.login',
            url: '/login',
            component: loginComponent.$name
        });
    $urlRouterProvider.otherwise('/');
}