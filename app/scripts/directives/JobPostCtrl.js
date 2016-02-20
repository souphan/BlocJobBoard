var appAngular = angular.module("blocJobs");

appAngular.controller("JobPostCtrl", function($scope) {      
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
      
});
