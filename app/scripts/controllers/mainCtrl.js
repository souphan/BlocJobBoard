// Controller with scope http and reusable Auth factory
blocJobs.controller('mainCtrl', ['$scope', '$http', 'Auth', function($scope, $http, Auth) { 
  // Listens for changes in authentication state
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    console.log(authData)
  });

  // Logs in a user with GitHub
  $scope.login = function() {
    Auth.$authWithOAuthPopup("github").catch(function(error) {
      console.error("Error authenticating with GitHub:", error);
    });
  };

  // Logs out the logged-in user
  $scope.logout = function() {
    Auth.$unauth();
  };

}]);
