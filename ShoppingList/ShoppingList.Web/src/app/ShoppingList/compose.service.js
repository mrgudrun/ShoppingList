
'use strict';

angular.module('app.compose', []).factory('composeService', function ($http) {

    var service = {};

    service.CreateShoppingList = function (userId, callback) {
        $http.post('/webapi/api/Shopplinglist/create', { UserId: userId }).success(function (response) {
            callback(response.Id);
        });
    };

    service.LoadShoppingList = function(shoppingListId, callback) {
        $http.get('/webapi/api/Shopplinglist/' + shoppingListId).success(function (response) {
            callback(response);
        });
    }

    service.CreateShoppingItem = function (shoppingListId, name, callback) {
        $http.post('/webapi/api/shoppingitem/create', { ShoppingListId: shoppingListId, ShoppingItemId: 0, Name: name }).success(function (response) {
            //console.log(response.Id);
            callback(response.Id);
        });
    };
    service.RemoveShoppingItem = function ( itemId) {

        //  $http.delete(String.format("/webapi/api/shoppingitem/{id}/", itemId));

        $http.delete("/webapi/api/shoppingitem/"+itemId+"/");
    }
    return service;

});