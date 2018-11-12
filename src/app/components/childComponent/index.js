import template from './index.html';
class controller {
  constructor() {}

  $onInit() {
    console.log('$onInit is called');
  }
}

export default {
  template,
  controller: controller,
  controllerAs: 'ctrl',
  name: 'childComponent',
  bindings: {
    sayHi: '&'
  }
};
