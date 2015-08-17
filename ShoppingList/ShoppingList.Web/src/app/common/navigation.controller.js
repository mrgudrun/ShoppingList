angular.module('app.navigation', ['ngSanitize'])
    .controller('NavigationController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        console.log("navigationcONTROLLER");
 
        var vm = {};
        vm.Username = $rootScope.globals.currentUser.Username;

    }]);