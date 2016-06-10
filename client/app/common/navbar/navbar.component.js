import template1 from './navbar.html';
import templateLogged from './navbar_logged.html';
import controller from './navbar.controller';
import './navbar.scss';

/*
let currentPath = window.location.pathname;
let templateUrl = (currentPath==='/auth') ? template1 : templateLogged ;
*/


let navbarComponent = {
  restrict: 'E',
  bindings: {},
  //template: templateUrl,
  template: template1,
  controller,
  controllerAs: 'vm'
};

navbarComponent.$inject = ['$scope'];
export default navbarComponent;
