var scotchTodo = angular.module('nodeTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/allnews')
        .success(function(data) {
            $scope.news = data;
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    // pagination
    $scope.paginationChildWebstore = function(value) {
        $scope.offset = Math.ceil(value);
    }

}