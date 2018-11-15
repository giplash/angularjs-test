import homeComponent from './home/home.component';
import cabinetComonent from './cabinet.component';

export default function($stateProvider) {
    $stateProvider
        .state({
            name: 'app.cabinet',
            component: cabinetComonent.$name          
        })
        .state({
            name: 'app.cabinet.home',
            url: '/',  
            component: homeComponent.$name          
        })

}