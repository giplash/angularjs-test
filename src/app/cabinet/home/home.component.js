import template from './home.template.html';
import './index.less';

class Controller {
    constructor($scope) {
    }

    callback(data) {
        console.log(data);
    }
}

export default {
    template, 
    controller: Controller,
    $name: 'ttHome'
}