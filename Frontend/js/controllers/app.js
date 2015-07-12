'use strict';

var app = angular.module('myApp', [
    "ngRoute",
    "ui.calendar",
    "ui.bootstrap",
    "loginControllers",
    "profileControllers",
    "calendarControllers",
    "menuControllers",
    "adminControllers"
    ])
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
    when('/app/about', {
        templateUrl: 'partials/about',
        controller: 'loginController'
    }).
    when('/app/regpol', {
        templateUrl: 'partials/regpol',
        controller: 'loginController'
    }). 
  
    when('/app/calendar', {
        templateUrl: 'partials/calendar',
        controller: 'calendarController',
        resolve:{
            loggedin: checkLoggedin
        }
    }).
  when('/app/users', {
        templateUrl: 'partials/users.html',
        controller: 'adminController',
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
    // Initialize a new promise
    var deferred = $q.defer();
    // Make an AJAX call to check if the user is logged in
    $http.get('/loggedin').success(function(user){
            // Authenticated
        if (user !== '0') deferred.resolve();
            // Not Authenticated
        else {
            $rootScope.message = 'You need to log in.';
            deferred.reject(); 
            $location.url('/app/signin');
        }
    });

    return deferred.promise;
};

var checkadmin = function($q, $timeout, $http, $location, $rootScope,user){
    // Initialize a new promise
    var deferred = $q.defer();

        if (user.isadmin === false) deferred.resolve();
            // Not Authenticated
        else {
            $rootScope.message = 'You must be an admin.';
            deferred.reject(); 
            $location.url('/app/signin');
        }

    return deferred.promise;
};
