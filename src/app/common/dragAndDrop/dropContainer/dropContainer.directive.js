dropContainer.$name = 'ttDropContainer';

export default function dropContainer() {
    return {
        restrict: 'A',
        scope: {
            ttCallback: '&',
            ttDropData: '<'
        },
        link: function(scope, el, attrs) {
            const element = el;

            element.on('dragover', function(e) {
                e.preventDefault();
            })

            element.on('drop', function(e) {
                e.preventDefault();
                const data = JSON.parse(e.dataTransfer.getData('data'));
                scope.ttCallback({
                    data,
                    dropData: scope.ttDropData
                });
            });
        }
    }
}