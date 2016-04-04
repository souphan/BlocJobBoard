blocJobs.controller('jobPostCtrl', ['$scope', '$firebaseArray', '$http', function($scope, $firebaseArray, $http) {
        
    // TOGGLE RADIO BUTTON TO SHOW ADDRESS
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    // SELECTED JOB INDEX HIGHLIGHTED WHEN CLICKED
    $scope.selectedIndex = null;
    
    $scope.selectJob = function(index) {
        $scope.selectedIndex = index;  
    };

    // SETTING VARIABLE FOR EMPTY TEXT INPUT
    $scope.jobTitle = "";
    $scope.companyName = "";
    $scope.jobDescription = "";
    $scope.city = "";
    $scope.state = "";
    $scope.postalCode = "";
    $scope.jobTypes = [];
    $scope.jobLocation = [];
    
    // INCLUDING RADIO BUTTON JOB TYPE TO BE ADDED IN FIRBASE
    $scope.jobTypes.push({type:"Frontend"});
    $scope.jobTypes.push({type:"Backend"});
    $scope.jobTypes.push({type:"Design"});
    $scope.jobTypes.push({type:"IOS"});
    $scope.jobTypes.push({type:"Android"});
    $scope.selectedType = $scope.jobTypes.type;
    
    // INCLUDING RADIO BUTTON JOB LOCATION TO BE ADDED IN FIRBASE
    $scope.jobLocation.push({location:"Remote"});
    $scope.selectedLocation = $scope.jobLocation.location;
    
//    if ($scope.selectedLocation == $scope.jobLocation[0].location) {
//        return $scope.toggle();
//    };
    
    //SETTING PAGE START INDEXING POINT
    $scope.currentPage = 1;
    $scope.numPerPage = 5;

    // SETTING FIREBASE TO myData VARIABLE
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
    
    $scope.saveJobs = function() {
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        $scope.myData.$add({id: timestamp, 
                            jobTitle:$scope.jobTitle,
                            companyName:$scope.companyName,
                            jobDescription:$scope.jobDescription,
                            city:$scope.city,
                            state:$scope.state,
                            postalCode:$scope.postalCode,
                            jobType:$scope.selectedType,
                            jobLocation:$scope.selectedLocation
});
        // SETTING VARIABLE TO EMPTY TEXT AND ARRAYS AFTER SUBMITTING DATA
        $scope.jobTitle = "";
        $scope.companyName = "";
        $scope.jobDescription = "";
        $scope.city = "";
        $scope.state = "";
        $scope.postalCode = "";
        $scope.jobType = [];
        $scope.jobLocation = [];
    };
    
    
// REFRESH DIGEST CYCLE WITH $APPLY SERVICE
//    $scope.myData.on('value', function(snapshot) {
//        $scope.jobs = snapshot.val();
//        $scope.$apply();
//    });
    

}]);