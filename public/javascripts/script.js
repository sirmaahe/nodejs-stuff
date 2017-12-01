angular.module('app', [])
    .controller('ProjectsController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/projects').then(function (response) {
            $scope.projects = response.data;
            $scope.currentSlide = 0;
            $scope.currentProject = $scope.projects[$scope.currentSlide];
            $scope.slideRight = function() {
                $scope.currentSlide = $scope.currentSlide + 1;
                var currentSlideNumber = $scope.currentSlide;
                currentSlideNumber = Math.abs(currentSlideNumber) % $scope.projects.length;
                $scope.currentProject = $scope.projects[currentSlideNumber]
            };
            $scope.slideLeft = function() {
                $scope.currentSlide = $scope.currentSlide - 1;
                var currentSlideNumber = $scope.currentSlide,
                    projectsLength = $scope.projects.length;
                currentSlideNumber = Math.abs(currentSlideNumber) % projectsLength;
                $scope.currentProject = $scope.projects[projectsLength - currentSlideNumber - 1];
            };
        }, function () {
            console.log('Can\'t load projects');
        });
    }]);
