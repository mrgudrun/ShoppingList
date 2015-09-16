
'use strict';

angular.module('app.compose', []).factory('composeService', function ($http) {

    var service = {};

    var createShoppingListRequest = function (shoppingList) {
        var request = {
            userId: shoppingList.userId,
            shoppingListId: shoppingList.shoppingListId,
            name: shoppingList.name,
            shoppingItems: []
        };
        for (var i = 0; i < shoppingList.shoppingItems.length; i++) {
            request.shoppingItems.push({ name: shoppingList.shoppingItems[i].name })

        }
        return request;
    };



    service.UpdateName = function (shoppingListId, model) {
        $http.put('/webapi/api/Shopplinglist/' + shoppingListId, {name: model}).success(function (response) {
            callback(response);
        });
    };

    service.CreateShoppingList = function (shoppingList, callback) {
        $http.post('/webapi/api/Shopplinglist/create', createShoppingListRequest(shoppingList)).success(function (response) {
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

    service.AddFriendToShoppingList = function (shoppingListId, friendId) {
        $http.post('/webapi/api/Shopplinglist/' + shoppingListId + "/AddFriend/" + friendId).success(function (response) {
            callback(response.Id);
        });
    };

    service.GetFriends = function (userId, callback) {
        $http.get('/webapi/api/user/' + userId + "/friends").success(function (response) {
            callback(response);
        });
    };

    return service;

});