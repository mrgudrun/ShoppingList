'use strict';

angular.module('app.login').factory('loggedInUserFactory', function loggedInUserFactory( $rootScope) {
    var vm = this;

    vm.refresh = function (callback) {
        if ($rootScope.globals !== undefined && $rootScope.globals.currentUser !== undefined) {
            vm.id = $rootScope.globals.currentUser.id;

            //if (vm.name === undefined) {
            //    personFactory.get({ id: vm.id }).$promise.then(function (person) {
            //        vm.name = person.FirstName + ' ' + person.SurName;
            //        vm.address = person.Address;
            //        vm.telephone = person.Telephone;
            //        vm.email = person.Email;
            //        vm.officeIds = person.OfficeIds;

            //        if (callback !== undefined)
            //            callback();
            //    });
            //}
        }
    }

    vm.refresh();

    return vm;
});

