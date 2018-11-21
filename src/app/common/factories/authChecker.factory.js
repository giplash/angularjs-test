authChecker.$name = 'authCheker';

export default function authChecker($q, $state) {
    return {
        
        'request': function(config) {
            console.log(config);
            return config;
        },

        'response': function(config) {
            console.log(config);
            return config;
        },

        'responseError': function(rejection) {
        }
    }
}