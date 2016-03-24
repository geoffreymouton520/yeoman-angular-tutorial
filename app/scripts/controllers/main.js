'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', ['$scope', "localStorageService", function($scope,
        localStorageService) {
        var todosInStore = localStorageService.get('todos');

        $scope.todos = todosInStore || [];

        $scope.$watch('todos', function() {
            localStorageService.set('todos', $scope.todos);
        }, true);
        $scope.addTodo = function() {
            var duplicateToDo = todoExists($scope.todo);

            if (!duplicateToDo) {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            }
        };
        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
        };
        function todoExists(todo) {
            var exists = false;
            for (var index = 0; index < $scope.todos.length; index++) {
                var element = $scope.todos[index];
                if (element === todo) {
                    exists = true;
                    break;
                }
            }
            return exists;
        }

    }]);
