blocJobs.controller('postingsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {      


    $scope.currentPage = 0; //SETTING PAGE START INDEXING POINT
    $scope.pageSize = 5;
//    $scope.jobType = []; //.push is for regular arrays/objects you need to use synchronised arrays/objects with angular
    
    $scope.myData = $firebaseArray(new Firebase('https://keodo-todo-list.firebaseio.com/Jobs'));
    
    
//    $scope.myData.on('value', function(snapshot) {
//        $scope.jobs = snapshot.val();
//        $scope.$apply();
//    });
//    
//    var jobFire = new Firebase('https://keodo-todo-list.firebaseio.com/Jobs');
    // REMOVE JOB ITEM METHOD
    $scope.removeJob = function (index, job) {
        
        // CHECK THAT JOB IS VALID
        if (job.id === undefined)return;

        // FIREBASE: REMOVE JOB FROM LIST
        $scope.myData.$remove(job);

    };  

   
}]);

//
//  // GET TODOS AS AN ARRAY
//    $scope.todos = $firebaseArray(todosRef);
//
//    // ADD TODO ITEM METHOD
//    $scope.addTodo = function () {
//
//        // CREATE A UNIQUE ID
//        var timestamp = new Date().valueOf();
//
//        $scope.todos.$add({
//            id: timestamp,
//            name: $scope.todoName,
//            status: 'pending'
//        });
//
//        $scope.todoName = "";
//
//    };
//      
//        // MARK TODO AS IN PROGRESS METHOD
//    $scope.startTodo = function (index, todo) {
//
//        // CHECK THAT ITEM IS VALID
//        if (todo.id === undefined)return;
//
//        // UPDATE STATUS TO IN PROGRESS AND SAVE
//        todo.status = 'complete';
//        $scope.todos.$save(todo);
//
//    };
//      
//        // REMOVE TODO ITEM METHOD
//    $scope.removeTodo = function (index, todo) {
//        
//        // CHECK THAT ITEM IS VALID
//        if (todo.id === undefined)return;
//
//        // FIREBASE: REMOVE ITEM FROM LIST
//        $scope.todos.$remove(todo);
//
//    };  