blocJobs.controller('jobPostCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {  
    
    $scope.myVar = false;
    $scope.myVarTwo = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    $scope.toggleTwo = function() {
    $scope.myVarTwo = !$scope.myVarTwo;
    };
    
    $scope.jobTitle = "";
    $scope.companyName = "";
    $scope.jobDescription = "";
    $scope.fullTime = "Full Time";
    $scope.partTime = "Part Time";
    $scope.contract = "Contract";
    $scope.freelance = "Freelance";
    $scope.internship = "Internship";
    $scope.jobs = {};
    
    $scope.myData = new Firebase('https://keodo-todo-list.firebaseio.com/Jobs');
    
    $scope.saveJobs = function() {
        $scope.myData.push({jobTitle:$scope.jobTitle,
                            companyName:$scope.companyName,
                            jobDescription:$scope.jobDescription,
                            fullTime:$scope.fullTime,
                            partTime:$scope.partTime,
                            contract:$scope.contract,
                            freelance:$scope.freelance,
                            internship:$scope.internship});
        
        $scope.jobTitle = "";
        $scope.companyName = "";
        $scope.jobDescription = "";
        $scope.fullTime = "";
        $scope.partTime = "";
        $scope.contract = "";
        $scope.freelance = "";
        $scope.internship = "";
    };
    
    $scope.myData.on('value', function(snapshot) {
        $scope.jobs = snapshot.val();
        $scope.$apply();
    });

}]);