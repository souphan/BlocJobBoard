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
    $scope.streetAddress = "";
    $scope.city = "";
    $scope.state = "";
    $scope.postalCode = "";
    $scope.jobTypes = []; //.push is for regular arrays/objects you need to use synchronised arrays/objects with angular
    
    // INCLUDING RADIO BUTTON JOB TYPE TO BE ADDED IN FIRBASE
    $scope.jobTypes.push({type:"Full Time"});
    $scope.jobTypes.push({type:"Part Time"});
    $scope.jobTypes.push({type:"Contract"});
    $scope.jobTypes.push({type:"Freelance"});
    $scope.jobTypes.push({type:"Internship"});
    $scope.selectedType = $scope.jobTypes[0].type;
    
    $scope.currentPage = 1;
    $scope.numPerPage = 5;

    // SETTING FIREBASE TO myData VARIABLE
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
    
    $scope.saveJobs = function() {
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        $scope.myData.$add({jobTitle:$scope.jobTitle,id: timestamp,
                            companyName:$scope.companyName,
                            jobDescription:$scope.jobDescription,
                            streetAddress:$scope.streetAddress,
                            city:$scope.city,
                            state:$scope.state,
                            postalCode:$scope.postalCode,
                            jobType:$scope.selectedType
});
        // SETTING VARIABLE TO EMPTY TEXT AND ARRAYS AFTER SUBMITTING DATA
        $scope.jobTitle = "";
        $scope.companyName = "";
        $scope.jobDescription = "";
        $scope.streetAddress = "";
        $scope.city = "";
        $scope.state = "";
        $scope.postalCode = "";
        $scope.jobType = [];
    };
    
    
// REFRESH DIGEST CYCLE WITH $APPLY SERVICE
//    $scope.myData.on('value', function(snapshot) {
//        $scope.jobs = snapshot.val();
//        $scope.$apply();
//    });
    

}]);