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
  })

  .config(function ($compileProvider) {
      // Courtesy: http://ambikasukla.wordpress.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
      // Change to false for production
      $compileProvider.debugInfoEnabled(false);
  });
