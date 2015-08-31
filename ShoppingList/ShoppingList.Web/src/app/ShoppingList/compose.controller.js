'use strict';
angular.module('app.compose').controller('ComposeController',
        function ($scope, $location, $filter, composeService, $rootScope, $stateParams, $modal) {

            $scope.items = [];
            $scope.items.push({ username: "Runar", id: 1 });
            $scope.items.push({ username: "Dummy", id: 2 });

            var model = $scope.model = {
                shoppingListId: $stateParams.id,
                name: "",
                shoppingItems: [],
                itemEdit: "",
                userId: $rootScope.globals.currentUser.id,
                isTitleEditMode: false,
                title: "Testing"
            }

            model.findFriend = function () {
                $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'myFriends.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    resolve: {
                        items: function () {
                            return $scope.items;
                        }
                    }
                });
            };

            if (model.shoppingListId == 0) {
                composeService.CreateShoppingList(model.userId, function (id) {
                    console.log(id);
                    model.shoppingListId = id;
                });
            } else {
                composeService.LoadShoppingList(model.shoppingListId, function (shoppingList) {
                    console.log(shoppingList);
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

            $scope.titleChanged = function () {
                model.isTitleEditMode = false;
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
                composeService.CreateShoppingItem(model.shoppingListId, newItem, function (id) {
                    shoppingItem.Id = id;
                });

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

    $scope.items = items;
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