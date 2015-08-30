'use strict';

angular.module('app.main', []).controller('MainController', function (mainService, $rootScope, $scope) {

    var model = $scope.model = {
        shoppingLists: []
    };
    console.log("æøå")
    $scope.testing = "æ<strong>ø</strong>å";
    mainService.getShoppingLists($rootScope.globals.currentUser.id, function (response) {

        $scope.removeShoppingList = function (item) {
            console.log(item);
            mainService.deleteShoppingList(item.Id);

        var itemIndex = model.shoppingLists.indexOf(item);
        model.shoppingLists.splice(itemIndex, 1);
    };

        
        angular.forEach(response, function(value) {
            model.shoppingLists.push(value);
        });
        console.log(model);
    });


});