import template from './index.html';

class controller {
  constructor() {
    this.text = 'Hello WORLD!';
  }
}

export default {
  template,
  controller: controller,
  controllerAs: 'ctrl',
  name: 'component',
};
