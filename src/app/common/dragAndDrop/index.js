import angular from 'angular';

import draggableElementDirective from './draggableElement/draggableElement.directive';
import dropContainerDirective from './dropContainer/dropContainer.directive';

export default angular
    .module('dragAndDrop', [])
    .directive(draggableElementDirective.$name, draggableElementDirective)
    .directive(dropContainerDirective.$name, dropContainerDirective).name
