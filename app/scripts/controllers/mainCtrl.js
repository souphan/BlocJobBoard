// CONTROLLER WITH REUSABLE AUTH FACTORY
blocJobs.controller('mainCtrl', ['$scope', '$http', 'Auth', '$firebaseArray', '$auth', function($scope, $http, Auth, $firebaseArray, $auth) { 
  
    // SELECTED JOB INDEX HIGHLIGHTED WHEN CLICKED
    $scope.selectedIndex = null;
    $scope.selectedJob = null;
    
    $scope.selectJob = function (job, index) {
        $scope.selectedIndex = index; 
        $scope.selectedJob = job;
    };
    
    //SETTING PAGE START INDEXING POINT
    $scope.currentPage = 1;
    $scope.numPerPage = 8;
    
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
     
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
    
      // LISTENS FOR CHANGES IN AUTHENTICATION STATE
      Auth.$onAuth(function(authData) {
        $scope.authData = authData;
      });

      // LOGS IN A USER WITH GITHUB
      $scope.login = function() {
        Auth.$authWithOAuthPopup("github").catch(function(error) {
          console.error("Error authenticating with GitHub:", error);
        });
      };

      // LOGS OUT THE USER
      $scope.logout = function() {
        Auth.$unauth();
      };

}]);