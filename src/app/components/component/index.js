import template from './index.html';
import './style.less';

class controller {
  constructor() {
    this.text = 'Hello World!';    
  }
  
  func() {
    alert('Hi!');
  }
}

export default {
  template,
  controller: controller,
  controllerAs: 'ctrl',
  name: 'component',
  bindings: {
    author: '@'
  }
};
