'use strict';

angular.module('app.signUp', [])
    .factory('signUpService', ['$http', function ($http)
{
    var service = {};
    service.SignUp = function (username, password, callback) {
        $http.post('/webapi/api/signup/signup', { username: username, password: password })
        .success(function (response)
        {
            console.log(response.Username);
            callback();
        });

    };
    return service;
}]);