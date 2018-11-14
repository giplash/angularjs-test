BoardItemDirective.$name = 'boardItemDirective';
export default function BoardItemDirective() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$set('draggable', 'true');         

            element.on('dragstart', function(e) {
                console.log('dragstart');
                e.dataTransfer.setData('text/plain', '');
                e.dataTransfer.setData('itemId', scope.$ctrl.itemId);
                e.dataTransfer.setData('boardId', scope.$ctrl.boardId);
            });
        }
    }
}