import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookComponent from './book.component.js';

let bookModule = angular.module('book', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('book', {
        url: 'store/books/:bookId/',
        template: '<book></book>',
        data: {
          authorization: true,
          redirectTo: 'auth',
          memory: true
        }
      });
  })

  .component('book', bookComponent);

export default bookModule;
