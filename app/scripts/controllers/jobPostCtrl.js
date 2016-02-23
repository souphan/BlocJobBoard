blocJobs.controller('jobPostCtrl', ['$scope', function($scope) {      
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
      
}]);