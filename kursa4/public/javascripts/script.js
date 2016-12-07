angular.module('app', [])
    .controller('ProjectsController', ['$scope', function ($scope, $http) {
        $http.get('/projects', config).then(function (data) {
            $scope.projects = data;
            $scope.currentProject = data[0];
        }, function () {
            console.log('Can\'t load projects');
        });
    }]);
