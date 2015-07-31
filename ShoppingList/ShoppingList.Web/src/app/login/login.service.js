'use strict';

angular.module('app.login', [])

.factory('authenticationService', ['$base64', '$http', '$cookieStore', '$rootScope', '$timeout', 'loggedInUserFactory',
    function ($base64, $http, $cookieStore, $rootScope, $timeout, loggedInUserFactory) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Use this for real authentication
             ----------------------------------------------*/
            $http.post('/api/user/login', { username: username, password: password })
                .success(function (response) {
                    callback(response);
                    $rootScope.globals.currentUser.id = response.UserId;
                    $cookieStore.put('globals', $rootScope.globals);
                    loggedInUserFactory.refresh();
                })
                .error(function (response) {
                    callback(response);
                });
        };

        service.SetCredentials = function (username, password) {
            var authdata = $base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])