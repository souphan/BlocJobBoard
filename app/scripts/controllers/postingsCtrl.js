blocJobs.controller('postingsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {      

    var todosRef = new Firebase('https://keodo-todo-list.firebaseio.com/');

    // GET TODOS AS AN ARRAY
    $scope.todos = $firebaseArray(todosRef);

    // ADD TODO ITEM METHOD
    $scope.addTodo = function () {

        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();

        $scope.todos.$add({
            id: timestamp,
            name: $scope.todoName,
            status: 'pending'
        });

        $scope.todoName = "";

    };
      
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