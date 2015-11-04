var incremmoApp = require('./../IncremmoModule');

incremmoApp.controller('ChatController', function($scope, socket) {

    $scope.messages = [];

    socket.on('chat.message', function (data) {
        $scope.messages.push(data);
    });

    $scope.sendMessage = function () {
        socket.emit('chat.message', { username: $scope.username, message: $scope.outgoingMessage });
        $scope.outgoingMessage = '';
    };
});