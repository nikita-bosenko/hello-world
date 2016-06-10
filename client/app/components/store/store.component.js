import template from './store.html';
import controller from './store.controller.js';
import './store.scss';

let storeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default storeComponent;
