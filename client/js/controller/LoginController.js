var incremmoApp = require('./../IncremmoModule');

incremmoApp.controller('LoginController', function($scope, $location, login) {

    $scope.login = function () {
        login($scope.username, $scope.password, function (err, res) {
            if (err) {
                // TODO: Login error handling.
            } else {
                $location.path('/game');
            }
        });
    }
});