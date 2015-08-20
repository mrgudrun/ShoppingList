'use strict';




angular.module('app.compose').controller('ComposeController',
    
        function ($scope, $location, $filter, composeService, $rootScope, $stateParams) {
            console.log("ComoposeController");

             

            var model = $scope.model = {
                shoppingListId: $stateParams.id,
                name: "",
                shoppingItems: [],
                itemEdit: "",
                userId: $rootScope.globals.currentUser.id
            }

            console.log("id:" + model.shoppingListId);


            if (model.shoppingListId == 0) {
                composeService.CreateShoppingList(model.userId, function(id) {
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


//$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
            //$scope.editedTodo = null;

            //if ($location.path() === '') {
            //    $location.path('/');
            //}

            //$scope.location = $location;

            //$scope.$watch('location.path()', function (path) {
            //    $scope.statusFilter = { '/active': { completed: false }, '/completed': { completed: true } }[path];
            //});

            //$scope.$watch('remainingCount == 0', function (val) {
            //    $scope.allChecked = val;
            //});

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

            //$scope.editTodo = function (todo) {
            //    $scope.editedTodo = todo;
            //    // Clone the original todo to restore it on demand.
            //    $scope.originalTodo = angular.extend({}, todo);
            //};

            //$scope.doneEditing = function (todo) {
            //    $scope.editedTodo = null;
            //    todo.title = todo.title.trim();

            //    if (!todo.title) {
            //        $scope.removeTodo(todo);
            //    }

            //    todoStorage.put(todos);
            //};

            //$scope.revertEditing = function (todo) {
            //    todos[todos.indexOf(todo)] = $scope.originalTodo;
            //    $scope.doneEditing($scope.originalTodo);
            //};

            $scope.removeItem = function (shoppingItem) {
                model.shoppingItems.splice(model.shoppingItems.indexOf(shoppingItem), 1);
                if (shoppingItem.Id > 0)
                    composeService.RemoveShoppingItem(shoppingItem.Id);
            }
            //$scope.todoCompleted = function (todo) {
            //    $scope.remainingCount += todo.completed ? -1 : 1;
            //    todoStorage.put(todos);
            //};

            //$scope.clearCompletedTodos = function () {
            //    $scope.todos = todos = todos.filter(function (val) {
            //        return !val.completed;
            //    });
            //    todoStorage.put(todos);
            //};

            //$scope.markAll = function (completed) {
            //    todos.forEach(function (todo) {
            //        todo.completed = !completed;
            //    });
            //    $scope.remainingCount = completed ? todos.length : 0;
            //    todoStorage.put(todos);
            //};
        });