import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeComponent from './store.component.js';

let storeModule = angular.module('store', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('store', {
      url: '/store',
      template: '<store></store>',
      data: {
        authorization: true,
        redirectTo: 'auth',
        memory: true
      }
    });
})

.component('store', storeComponent);

export default storeModule;
