
'use strict';

angular.module('app.compose', []).factory('composeService', function ($http) {

    var service = {};

    service.CreateShoppingList = function (callback) {
        $http.post('/webapi/api/Shopplinglist/create').success(function (response) {
            callback(response.Id);
        });
    };

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