import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  //$urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      data: {
        authorization: true,
        redirectTo: 'auth',
        memory: true
      }
    });
})

.component('home', homeComponent);

export default homeModule;
