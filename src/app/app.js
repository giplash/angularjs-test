import angular from 'angular';
import './style/main.less';

import homeComponent from './home/homeComponent';
import boardComponent from './home/board/boardComponent';
import boardItemComponent from './home/boardItem/boardItemComponent';

import boardDirective from './home/board/boardDirective';
import boardItemDirective from './home/boardItem/boarditemDirective';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .component(homeComponent.$name, homeComponent)
    .component(boardItemComponent.$name, boardItemComponent)
    .component(boardComponent.$name, boardComponent)
    .directive(boardDirective.$name, boardDirective)
    .directive(boardItemDirective.$name, boardItemDirective)