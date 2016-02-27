blocJobs.controller('jobPostCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {  
    
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
    
 $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    
    //CREATE A FIREBASE REFERENCE
    $scope.items = [];
    var firebase = new Firebase("https://keodo-todo-list.firebaseio.com/");
    $scope.addItem = function () {
        firebase.push({"content": $scope.itemContent})
        $scope.itemContent = '';
    };
    $scope.removeItem = function () {
        var item = this.item;
        firebase.child(item[".key"]).remove();
    };
    firebase.on("child_added", function(addedSnap) {
        var item = {
            ".key": addedSnap.key(),
            "content": addedSnap.val().content
        };
        $scope.safeApply(function() {
            $scope.items.push(item);
        });
        firebase.child(addedSnap.key()).on("value", function(valueSnap) {
            $scope.safeApply(function() {
                if (valueSnap.val()) {
                    item.content = valueSnap.val().content;
                } else {
                    var idx = -1;
                    $scope.items.forEach(function(e, i) {
                        if (e[".key"] == valueSnap.key()) {
                            idx = i;
                            return;
                        }
                    });
                    if (idx > -1) {
                        $scope.items.splice(idx, 1);
                    }
                }
            });
        });
    });
    $scope.$watch("items", function(newItems, oldItems) {
        // TODO: How do I check which item is updated in a better way?
        newItems.forEach(function(newItem) {
            oldItems.forEach(function(oldItem) {
                if (newItem[".key"] == oldItem[".key"] && newItem.content != oldItem.content) {
                    firebase.child(newItem[".key"]).update({"content": newItem.content});
                }
            });
        });
    }, true);


  
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