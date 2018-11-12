import angular from 'angular';
import component from './components/component';
import './style/main.less';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular.module(MODULE_NAME, [])
  .component(component.name, component)
