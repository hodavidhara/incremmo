var incremmoApp = require('./../IncremmoModule');

incremmoApp.controller('GameController', function($scope, socket) {

    $scope.game = {
        stats: {
            xp: 0
        }
    };

    $scope.train = function () {
        $scope.game.stats.xp += 1;
    }
});