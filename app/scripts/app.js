'use strict';

/**
 * @ngdoc overview
 * @name mdsv2App
 * @description
 * # mdsv2App
 *
 * Main module of the application.
 */
angular
  .module('mdsv2App', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
