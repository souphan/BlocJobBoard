blocJobs.controller('jobPostCtrl', ['$scope', '$firebaseArray', '$http', function($scope, $firebaseArray, $http) {
    
//    header("Access-Control-Allow-Origin: https://souphan.com:3000");
    
    // TOGGLE RADIO BUTTON TO SHOW ADDRESS
    $scope.myVar = false;
    $scope.myVarTwo = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    $scope.toggleTwo = function() {
    $scope.myVarTwo = !$scope.myVarTwo;
    };
    
    $scope.formModel = {};
    
    $scope.onSubmit = function() {
            console.log("Job submitted");
            console.log($scope.formModel);  
    
//        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
//            success(function (data) {
//            console.log("=D")
//        }).error(function(data) {
//            console.log("=(")
//        });
   
    };
    // SETTING VARIABLE FOR EMPTY TEXT INPUT
    $scope.jobTitle = "";
    $scope.companyName = "";
    $scope.jobDescription = "";
    $scope.streetAddress = "";
    $scope.city = "";
    $scope.state = "";
    $scope.postalCode = "";
//    $scope.fullTime = "Full Time"; //WORKING ON RADIO BUTTONS TO BE ADDED IN FIREBASE
//    $scope.partTime = "Part Time";
//    $scope.contract = "Contract";
//    $scope.freelance = "Freelance";
//    $scope.internship = "Internship";
    
    // SETTING PAGE START INDEXING POINT
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.jobTypes = []; //.push is for regular arrays/objects you need to use synchronised arrays/objects with angular
    $scope.jobs = {};
    
    // INCLUDING RADIO BUTTON JOB TYPE TO BE ADDED IN FIRBASE
    $scope.jobTypes.push({type:"Full Time"});
    $scope.jobTypes.push({type:"Part Time"});
    $scope.jobTypes.push({type:"Contract"});
    $scope.jobTypes.push({type:"Freelance"});
    $scope.jobTypes.push({type:"Internship"});
    $scope.selectedType = $scope.jobTypes[0].type;
    
//    $scope.numberOfPages=function(){
//        return Math.ceil($scope.jobs.length/$scope.pageSize);                
//        }
//        for (var i=0; i<45; i++) {
//            $scope.jobs.push("Item "+i);
//        }

    // SETTING FIREBASE TO myData VARIABLE
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
    
    $scope.saveJobs = function() {
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        $scope.myData.push({jobTitle:$scope.jobTitle,id: timestamp,
                            companyName:$scope.companyName,id: timestamp,
                            jobDescription:$scope.jobDescription,id: timestamp,
                            streetAddress:$scope.streetAddress,
                            city:$scope.city,id: timestamp,
                            state:$scope.state,id: timestamp,
                            postalCode:$scope.postalCode,id: timestamp,
                            jobType:$scope.selectedType
//                            fullTime:$scope.fullTime,
//                            partTime:$scope.partTime,
//                            contract:$scope.contract,
//                            freelance:$scope.freelance,
//                            internship:$scope.internship
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
//        $scope.fullTime = "Full Time";
//        $scope.partTime = "Part Time";
//        $scope.contract = "Contract";
//        $scope.freelance = "Freelance";
//        $scope.internship = "Internship";
    };
    
    // REFRESH DIGEST CYCLE WITH $APPLY SERVICE
//    $scope.myData.on('value', function(snapshot) {
//        $scope.jobs = snapshot.val();
//        $scope.$apply();
//    });
    

}]);