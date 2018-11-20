compareTo.$name = 'ttCompareTo';

export default function compareTo() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=ttCompareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 