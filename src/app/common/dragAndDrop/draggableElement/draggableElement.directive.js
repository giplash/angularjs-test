import template from './draggableElement.template.html';

draggableElement.$name = 'ttDraggableElement';


export default function draggableElement() {
    return {
        template,
        restrict: 'E',
        transclude: true,
        scope: {
            data: '<'
        },
        link: function(scope, el, attrs) {
            const ngTranscludeElement =  angular.element(el[0].firstElementChild);            
            if (ngTranscludeElement.children().length > 1) {
                throw new Error('Directive ttDraggableElement can\'t has more than one child');
            };

            const element = angular.element(ngTranscludeElement[0].firstElementChild);
            element.attr('draggable', 'true');

            element.on('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', '');
                e.dataTransfer.setData('data', JSON.stringify(scope.data));
            });
        }
    }
}