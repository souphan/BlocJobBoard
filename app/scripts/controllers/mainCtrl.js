// CONTROLLER WITH WITH REUSABLE AUTH FACTORY
blocJobs.controller('mainCtrl', ['$scope', '$http', 'Auth', function($scope, $http, Auth) { 
  // LISTENS FOR CHANGES IN AUTHENTICATION STATE
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    console.log(authData)
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
