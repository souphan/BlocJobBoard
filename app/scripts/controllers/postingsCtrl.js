blocJobs.controller('postingsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {      

    $scope.selectedIndex = null;
    
    $scope.selectJob = function (index) {
        $scope.selectedIndex = index;  
    };
   
    $scope.currentPage = 0; //SETTING PAGE START INDEXING POINT
    $scope.pageSize = 5;
//    $scope.jobType = []; //.push is for regular arrays/objects you need to use synchronised arrays/objects with angular
    
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
    
    // REMOVE JOB ITEM METHOD
    $scope.removeJob = function (index, job) {
        
        // CHECK THAT JOB IS VALID
        if (job.id === undefined)return;

        // FIREBASE: REMOVE JOB FROM LIST
        $scope.myData.$remove(job);

    };  

   
}]);