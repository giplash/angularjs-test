import template from './dropContainer.template.html';

dropContainer.$name = 'ttDropContainer';


export default function dropContainer() {
    return {
        template,
        restrict: 'E',
        transclude: true,
        scope: {
            callback: '&'
        },
        link: function(scope, el, attrs) {
            const ngTranscludeElement =  angular.element(el[0].firstElementChild);
            if (ngTranscludeElement.children().length > 1) {
                throw new Error('Directive ttDropContainer can\'t has more than one child');
            };
            const element = angular.element(ngTranscludeElement[0].firstElementChild);

            element.on('dragover', function(e) {
                e.preventDefault();
            })

            element.on('drop', function(e) {
                e.preventDefault();
                const data = JSON.parse(e.dataTransfer.getData('data'));
                scope.callback({
                    data
                });
            });
        }
    }
}