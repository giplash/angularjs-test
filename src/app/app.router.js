import homeComponent from './cabinet/home/home.component';

export default function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                cabinet: {
                    component: homeComponent.$name
                }
            }
        })
}