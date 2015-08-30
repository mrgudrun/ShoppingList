angular.module('app.navigation', ['ngSanitize'])
    .controller('NavigationController', ['$scope', '$rootScope', 'navigationService', function ($scope, $rootScope, navigationService) {

        console.log("navigationcONTROLLER");
 
        var vm = {};
        vm.Username = $rootScope.globals.currentUser.Username;

        var model = $scope.model ={ 
            newFriend: "",
        };
        model.onSubmit = function () {
            console.log(navigationService);
            navigationService.addFriend(model.newFriend, function (response) {

            })
        }

    }]);