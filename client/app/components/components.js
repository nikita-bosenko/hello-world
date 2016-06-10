import angular from 'angular';
import Home from './home/home';
import Store from './store/store';
import Auth from './auth/auth';
import Book from './book/book';
import Settings from './settings/settings';

let componentModule = angular.module('app.components', [
  Home.name,
  Store.name,
  Auth.name,
  Book.name,
  Settings.name
]);

export default componentModule;
