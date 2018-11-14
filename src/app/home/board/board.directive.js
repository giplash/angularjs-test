BoardDirective.$name = 'boardDirective';
export default function BoardDirective() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            element.on('dragover', function(e) {
                e.preventDefault();
            })

            element.on('drop', function(e) {
                e.preventDefault();
                const itemId = e.dataTransfer.getData("itemId");
                const oldBoardId = e.dataTransfer.getData("boardId");
                const newBoardId = scope.$ctrl.boardData().id;
                scope.$ctrl.moveItem({
                    oldBoardId,
                    newBoardId,
                    itemId
                })
            });
        }
    }
}