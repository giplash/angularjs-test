checkPasswordEquality.$name = 'checkPasswordEquality';

export default function checkPasswordEquality() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function passwordValidation(value) {
                const password1 = scope.$ctrl.password1;
                if (password1 !== value) {
                    mCtrl.$setValidity('passwordEquality', false);
                } else {
                    mCtrl.$setValidity('passwordEquality', true);
                }
                return value;
            }
            mCtrl.$parsers.push(passwordValidation);
        }
    }
}