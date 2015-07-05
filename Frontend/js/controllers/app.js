'use strict';

var app = angular.module('myApp', [
    "ngRoute",
    "ui.calendar",
    "ui.bootstrap",
    "loginControllers",
    "calendarControllers",
    "menuControllers"])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
        templateUrl: 'partials/signin',
        controller: 'loginController'
    }).
    when('/app/signin', {
        templateUrl: 'partials/signin',
        controller: 'loginController'
    }).
    when('/app/profile', {
        templateUrl: 'partials/profile',
        controller: 'loginController'
    }).
    when('/app/calendar', {
        templateUrl: 'partials/calendar',
        controller: 'calendarController'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});


