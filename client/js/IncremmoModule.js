var angular = require('angular');
require('angular-socket-io');
require('angular-route');

var incremmoApp = angular.module('incremmo', [
    'ngRoute',
    'btford.socket-io'
]);

incremmoApp.config(function ($routeProvider) {
    $routeProvider.when('/login', {
       controller: 'LoginController',
       template: require('./template/login.html')
   }).when('/register', {
       controller: 'RegistrationController',
       template: require('./template/register.html')
   }).when('/game', {
       controller: 'GameController',
       template: require('./template/game.html')
   });
});

module.exports = incremmoApp;

