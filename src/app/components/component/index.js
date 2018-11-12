import template from './index.html';
import './style.less';

class controller {
  constructor() {
    this.text = 'Hello World!';
  }
}

export default {
  template,
  controller: controller,
  controllerAs: 'ctrl',
  name: 'component',
};
