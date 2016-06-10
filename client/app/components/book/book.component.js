import template from './book.html';
import controller from './book.controller';
import './book.scss';

let bookComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default bookComponent;
