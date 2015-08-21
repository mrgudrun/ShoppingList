'use strict';

angular.module('app.main').factory('mainService', function($http) {

    var service = {};
    service.getShoppingLists = function(userId, callback) {
        $http.get('/webapi/api/Shoppinglist/getbyuserid/' + 1).success(function (response) {
            callback(response);
        });
    }

    return service;

});

