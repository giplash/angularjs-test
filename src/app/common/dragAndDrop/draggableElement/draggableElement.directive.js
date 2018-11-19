draggableElement.$name = 'ttDraggableElement';

export default function draggableElement() {
    return {
        restrict: 'A',
        scope: {
            ttData: '<'
        },
        link: function(scope, el, attrs) {
            const element = el;
            element.attr('draggable', 'true');

            element.on('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', '');
                e.dataTransfer.setData('data', JSON.stringify(scope.ttData));
            });
        }
    }
}