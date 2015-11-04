var incremmoApp = require('./../IncremmoModule');

incremmoApp.factory('login', function($http) {

    return function(username, password, callback) {
        $http.post("/login", {username: username, password: password})
            .then(function (response) {
                callback(null, response.data);
            }, function (err) {
                callback(err);
            });
    }
});