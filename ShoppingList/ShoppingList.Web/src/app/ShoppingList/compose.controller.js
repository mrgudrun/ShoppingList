'use strict';
angular.module('app.compose').controller('ComposeController',
        function ($scope, $location, $filter, composeService, $rootScope, $stateParams, $modal) {

            $scope.items = [];
            $scope.items.push({ username: "Runar", id: 1 });
            $scope.items.push({ username: "Dummy", id: 2 });

            var model = $scope.model = {
                shoppingListId: $stateParams.id,
                name: "Untitled",
                shoppingItems: [],
                itemEdit: "",
                userId: $rootScope.globals.currentUser.id,
                isNameEditMode: false,
                nameLostFocus: {},
                friends:[]
            }

            model.nameLostFocus = function () {
                model.isNameEditMode = false;
                console.log(model.shoppingListId + " " + model.name);
                if (model.shoppingListId == 0) { //create shoppinglist
                    composeService.CreateShoppingList(model, function (id) {
                    model.shoppingListId = id})
                }
                else{
                    composeService.UpdateName(model.shoppingListId, model.name);
                }
            };

            model.findFriend = function () {
                $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'myFriends.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    resolve: {
                        items: function () {
                            return $scope.model.friends;
                        }
                    }
                });
            };

        if (model.shoppingListId > 0) {
                composeService.LoadShoppingList(model.shoppingListId, function (shoppingList) {
                    console.log(shoppingList);
                    model.name = shoppingList.Name;
                    angular.forEach(shoppingList.ShoppingItems, function (item) {
                        var shoppingItem = {
                            name: item.Name,
                            Id: item.Id,
                            completed: false
                        }
                        model.shoppingItems.push(shoppingItem);
                    });
                });
        }

        composeService.GetFriends(model.userId, function (response) {
            console.log("---");
            for (var i = 0; i < response.length; i++) {
                console.log(response[i]);
                model.friends.push({ id: response[i].Id, name: response[i].Name });
            }
        });


        $scope.nameChanged = function () {
            model.isnameEditMode = false;
            }

            $scope.addShoppingItem = function () {
                console.log("enter pressed");
                var newItem = model.itemEdit.trim();
                if (newItem.length === 0) {
                    return;
                }
                var shoppingItem = {
                    name: newItem,
                    completed: false
                }
                model.shoppingItems.push(shoppingItem);
                if (model.shoppingListId > 0) {
                    composeService.CreateShoppingItem(model.shoppingListId, newItem, function (id) {
                        shoppingItem.Id = id;
                    });
                };

                model.itemEdit = "";
                $scope.remainingCount++;


            };

            $scope.removeItem = function (shoppingItem) {
                model.shoppingItems.splice(model.shoppingItems.indexOf(shoppingItem), 1);
                if (shoppingItem.Id > 0)
                    composeService.RemoveShoppingItem(shoppingItem.Id);
            }
        });

    angular.module('app.compose').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
        console.log(items)
        $scope.model = {friends:[]};

    $scope.model.friends = items;
    $scope.addFriend = function (friend) {
        $scope.selected = friend;
        console.log($scope.selected);
        $modalInstance.close($scope.selected);

    }
 

    //$scope.addFriend = function () {
    //    console.log($scope.selected.item)
    //};

    $scope.cancel = function () {
        console.log(items)
        $modalInstance.dismiss('cancel');
    };
});