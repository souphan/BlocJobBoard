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
//    $scope.fullTime = "Full Time";
//    $scope.partTime = "Part Time";
//    $scope.contract = "Contract";
//    $scope.freelance = "Freelance";
//    $scope.internship = "Internship";
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.jobType = []; //.push is for regular arrays/objects you need to use synchronised arrays/objects with angular
    $scope.jobs = {};
//    
//    $scope.numberOfPages=function(){
//        return Math.ceil($scope.jobs.length/$scope.pageSize);                
//        }
//        for (var i=0; i<45; i++) {
//            $scope.jobs.push("Item "+i);
//        }

    $scope.jobType.push({type:"Full Time"});
    $scope.jobType.push({type:"Part Time"});
    $scope.jobType.push({type:"Contract"});
    $scope.jobType.push({type:"Freelance"});
    $scope.jobType.push({type:"Internship"});
    $scope.selectedType = $scope.jobType[0].type;
    
    $scope.myData = new Firebase('https://keodo-todo-list.firebaseio.com/Jobs');
    
    $scope.saveJobs = function() {
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        $scope.myData.push({jobTitle:$scope.jobTitle,id: timestamp,
                            companyName:$scope.companyName,id: timestamp,
                            jobDescription:$scope.jobDescription,id: timestamp
//                            jobType:$scope.jobType
//                            fullTime:$scope.fullTime,
//                            partTime:$scope.partTime,
//                            contract:$scope.contract,
//                            freelance:$scope.freelance,
//                            internship:$scope.internship
});
        
        $scope.jobTitle = "";
        $scope.companyName = "";
        $scope.jobDescription = "";
        $scope.jobType = [];
//        $scope.fullTime = "Full Time";
//        $scope.partTime = "Part Time";
//        $scope.contract = "Contract";
//        $scope.freelance = "Freelance";
//        $scope.internship = "Internship";
    };
    
    $scope.myData.on('value', function(snapshot) {
        $scope.jobs = snapshot.val();
        $scope.$apply();
    });
    
    // REMOVE JOB ITEM METHOD
    $scope.removeJob = function (index, job) {
        
        // CHECK THAT JOB IS VALID
        if (job.id === undefined)return;

        // FIREBASE: REMOVE JOB FROM LIST
        $scope.myData.$remove(job);

    };  

}]);