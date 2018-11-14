import homeComponent from './home/home.component';
import error404Component from './error404/error404.component';
export default function($stateProvider) {
    const states = [
        {
            name: 'home',
            url: '/home',
            component: homeComponent.$name
        },
        {
            name: '404',
            url: '/*',
            component: error404Component.$name
        }
    ];
    states.forEach(item => $stateProvider.state(item));
}