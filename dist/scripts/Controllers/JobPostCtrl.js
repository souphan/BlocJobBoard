blocJobs.controller('jobPostCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {  
    
    $scope.myVar = false;
    $scope.myVarTwo = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    $scope.toggleTwo = function() {
    $scope.myVarTwo = !$scope.myVarTwo;
    };
    
    var todosRef = new Firebase('https://keodo-todo-list.firebaseio.com/');

    // GET TODOS AS AN ARRAY
    $scope.todos = $firebaseArray(todosRef);

    // ADD TODO ITEM METHOD
    $scope.addTodo = function () {

        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        
        $scope.todos.$add({
            id: timestamp,
            name: $scope.todoName1,
            status: 'pending'
        });

        $scope.todos.$add({
            id: timestamp,
            name: $scope.todoName2,
            status: 'pending'
        });
        
        $scope.todos.$add({
            id: timestamp,
            name: $scope.todoName3,
            status: 'pending'
        });

        $scope.todoName1 = "";
        $scope.todoName2 = "";
        $scope.todoName3 = "";

    };
    
//    Need to separate addtodo() function so that they can act independently
      
        // MARK TODO AS IN PROGRESS METHOD
    $scope.startTodo = function (index, todo) {

        // CHECK THAT ITEM IS VALID
        if (todo.id === undefined)return;

        // UPDATE STATUS TO IN PROGRESS AND SAVE
        todo.status = 'complete';
        $scope.todos.$save(todo);

    };
      
        // REMOVE TODO ITEM METHOD
    $scope.removeTodo = function (index, todo) {
        
        // CHECK THAT ITEM IS VALID
        if (todo.id === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.todos.$remove(todo);

    };  
  
}]);


//var myApp = angular.module("myapp", ["firebase"]);
//
//myApp.controller("MyController", ["$scope", "$firebaseArray",
//function($scope, $firebaseArray) {
//  //CREATE A FIREBASE REFERENCE
//  var ref = new Firebase("https://keodo-todo-list.firebaseio.com/");
//
//  // GET MESSAGES AS AN ARRAY
//  $scope.messages = $firebaseArray(ref);
//
//  //ADD MESSAGE METHOD
//  $scope.addMessage = function(e) {
//
//    //LISTEN FOR RETURN KEY
//    if (e.keyCode === 13 && $scope.msg) {
//      //ALLOW CUSTOM OR ANONYMOUS USER NAMES
//      var name = $scope.name || "anonymous";
//
//      //ADD TO FIREBASE
//      $scope.messages.$add({
//        from: name,
//        body: $scope.msg
//      });
//
//      //RESET MESSAGE
//      $scope.msg = "";
//    }
//  }
//}
//]);