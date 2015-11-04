var incremmoApp = require('./../IncremmoModule');
incremmoApp.controller('IncremmoController', function($location, $http) {
    $http.get('/user').then(function (response) {
        $location.path('/game');
    }, function (err) {
        $location.path('/login');
    });
});