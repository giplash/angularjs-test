authChecker.$name = 'authCheker';

export default function authChecker($q, $state) {
    return {
        'response': function(config) {
            console.log('config');
            console.log(config);
            return config;
        },

        'responseError': function(rejection) {
        }
    }
}