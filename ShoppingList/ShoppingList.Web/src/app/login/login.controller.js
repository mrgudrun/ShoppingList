'use strict';

angular.module('app.login')
    .controller('LoginController',
    [
        '$scope', '$rootScope', '$location', 'authenticationService', 'loggedInUserFactory',
        function($scope, $rootScope, $location, authenticationService, loggedInUserFactory) {
            // reset login status
            authenticationService.ClearCredentials();
            console.log("Im in login");
            $scope.login = function() {
                $scope.dataLoading = true;
                authenticationService.Login($scope.username, $scope.password, function(response) {
                    if (response.Success) {
                        authenticationService.SetCredentials($scope.username, $scope.password);
                        $location.path('/index/main');
                    } else {
                        $scope.error = response.Message;
                        $scope.dataLoading = false;
                    }
                });
            }; 
        }
    ])
