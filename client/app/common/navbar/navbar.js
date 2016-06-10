import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';



let navbarModule = angular.module('navbar', [
  uiRouter
])

.component('navbar', navbarComponent);

navbarModule.$inject = ['$scope', '$location', '$rootScope'];
export default navbarModule;


// this.currentPath = $location.path();
// this.templateUrl = (this.currentPath==='/auth') ? './navbar.html' : './navbar_logged.html' ;
