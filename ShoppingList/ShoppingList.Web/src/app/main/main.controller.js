'use strict';

angular.module('app.main', []).controller('MainController', function (mainService, $rootScope, $scope) {

    var model = $scope.model = {
        shoppingLists: []
    };


    mainService.getShoppingLists($rootScope.globals.currentUser.id, function (response) {
        
        angular.forEach(response, function(value) {
            model.shoppingLists.push(value);
        });
        console.log(model);
    });


});