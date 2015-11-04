var incremmoApp = require('./../IncremmoModule');

incremmoApp.controller('RegistrationController', function($scope, register) {

    $scope.register = function () {
        register($scope.username, $scope.email, $scope.password, function (err, res) {
            if (err) {
                // TODO: Registration error handling.
            } else {
                $location.path('/game');
            }
        });
    }
});