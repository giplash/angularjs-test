import signInComponent from './signIn/signIn.component';
import signUpComponent from './signUp/signUp.component';

export default function($stateProvider) {
    $stateProvider
        .state({
            name: 'app.auth.signIn',
            component: signInComponent.$name
        })
        .state({
            name: 'app.auth.signUp',
            component: signUpComponent.$name
        })
}