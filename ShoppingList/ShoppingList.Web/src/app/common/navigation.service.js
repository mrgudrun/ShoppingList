'use strict';

angular.module('app.navigation').factory('navigationService', function ($http, $rootScope) {
    var service = {
        
    };
    service.addFriend = function (friendRequest, callback) {
        var request = {
            userId: $rootScope.globals.currentUser.id,
            friend: friendRequest
        }
        $http.post('/webapi/api/friend', request).success(function (response) {
            callback(response)
        })
    }
    return service;
});