'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', ["$scope", function($scope) {
        $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
        $scope.addTodo = function() {
            var duplicateToDo = todoExists($scope.todo);

            if (!duplicateToDo) {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            }
        };
        function todoExists(todo) {
            var todoExists = false;
            for (var index = 0; index < $scope.todos.length; index++) {
                var element = $scope.todos[index];
                if (element === todo) {
                    todoExists = true;
                    break;
                }
            }
            return todoExists;
        }
    }]);
