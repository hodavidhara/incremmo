var incremmoApp = require('./../IncremmoModule');

incremmoApp.factory('register', function($http) {
    return function(username, email, password, callback) {
        $http.post("/register", {username: username, email: email, password: password})
            .then(function (response) {
                callback(null, response.data);
            }, function (err) {
                callback(err);
            });
    }
});