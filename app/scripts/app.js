'use strict';

angular.module('wireWorkflowApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
