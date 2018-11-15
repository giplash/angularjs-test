import signInComponent from './signIn/signIn.component';
import signUpComponent from './signUp/signUp.component';

export default function($stateProvider) {
    $stateProvider
        .state({
            name: 'app.login.signIn',
            component: signInComponent.$name
        })
        .state({
            name: 'app.login.signUp',
            component: signUpComponent.$name
        })
}