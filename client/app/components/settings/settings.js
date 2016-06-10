/**
 * Created by nbosenko on 07.06.2016.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component.js';

let settingsModule = angular.module('settings', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('settings', {
        url: '/settings',
        template: '<settings></settings>',
        data: {
          authorization: true,
          redirectTo: 'auth',
          memory: true
        }
      });
  })

  .component('settings', settingsComponent);

export default settingsModule;
