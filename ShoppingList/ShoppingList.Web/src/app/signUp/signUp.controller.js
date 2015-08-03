'use strict';

angular.module('app.signUp')
    .controller('SignUpController',
    ['signUpService','$scope', function (signUpService, $scope) {

        console.log("Im in SignUp");
        $scope.signUp = function () {

            signUpService.SignUp($scope.username, $scope.password, callback);
            console.log("first?!??!");
        };
    }]);

var callback = function () {
    console.log("The End");
}