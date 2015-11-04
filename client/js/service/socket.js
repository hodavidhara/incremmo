var incremmoApp = require('./../IncremmoModule');
var io = require('socket.io-client');

incremmoApp.factory('socket', function (socketFactory) {
    return socketFactory({
        ioSocket: io.connect()
    });
});