var blocJobs = angular.module('blocJobs', ["ui.router", "firebase"])

blocJobs.config(function($stateProvider, $urlRouterProvider){
    
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

     $stateProvider
     .state('landing', {
         url: '/',
         controller: 'mainCtrl',
         templateUrl: '/templates/landing.html'
     })
    .state('job-post', {
        url: "/job-post",
        controller: 'jobPostCtrl',
        templateUrl: "/templates/job-post.html"
    })
    .state('postings', {
        url: "/postings",
        controller: 'postingsCtrl',
        templateUrl: "/templates/postings.html"
    })
})

blocJobs.directive("naviMenu", function() {
    return {
        template: '<nav ui-view class="navbar navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="landing">Bloc</a></div><ul class="nav navbar-nav"><li class="active"><a href="#">Frontend Web Development</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Roadmaps <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Page 1-1</a></li><li><a href="#">Page 1-2</a></li><li><a href="#">Page 1-3</a></li></ul></li><li><a href="#">Messages</a></li><li><a href="#">Schedule</a></li></ul><ul class="nav navbar-nav navbar-right"><li><a href="#"><span class="glyphicon glyphicon-user"></span> Account</a></li><li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li></ul></div></nav>'
    }
});