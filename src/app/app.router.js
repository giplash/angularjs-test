import authComponent from "./auth/auth.component";

export default function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'app'
        })
        .state({
            name: 'app.auth',
            url: '/auth',
            component: authComponent.$name
        });
    $urlRouterProvider.otherwise('/');
}