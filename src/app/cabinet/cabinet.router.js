import homeComponent from './home/home.component';
import cabinetComonent from './cabinet.component';
import boardComponent from './board/board.component';

export default function($stateProvider) {
    $stateProvider
        .state({
            name: 'app.cabinet',
            component: cabinetComonent.$name          
        })
        .state({
            name: 'app.cabinet.boards',
            url: '/',  
            component: homeComponent.$name          
        })
        .state({
            name: 'app.cabinet.board-details',
            url: '/boards/:id',
            component: boardComponent.$name
        })

}