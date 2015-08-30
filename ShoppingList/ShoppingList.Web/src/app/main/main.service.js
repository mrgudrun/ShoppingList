'use strict';

angular.module('app.main').factory('mainService', function($http) {

    var service = {};
    service.getShoppingLists = function (userId, callback) { 
        console.log(userId);
        $http.get('/webapi/api/Shoppinglist/getbyuserid/' + userId).success(function (response) {
            callback(response);
        });
    }

    service.deleteShoppingList = function (shoppingListId) {
        $http.delete('/webapi/api/ShopplingList/' + shoppingListId);
    };

    return service;

});

