import angular from 'angular';

import './style/main.less';

import homeComponent from './home/home.component';
import boardComponent from './home/board/board.component';
import boardItemComponent from './home/boardItem/boadItem.component';
import error404Component from './error404/error404.component';

import boardDirective from './home/board/board.directive';
import boardItemDirective from './home/boardItem/boardItem.directive';

import router from './app.router';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular.module(MODULE_NAME, [])

    //.config(router)

    .component(homeComponent.$name, homeComponent)
    .component(boardItemComponent.$name, boardItemComponent)
    .component(boardComponent.$name, boardComponent)
    .component(error404Component.$name, error404Component)

    .directive(boardDirective.$name, boardDirective)
    .directive(boardItemDirective.$name, boardItemDirective)
    
   