var blocJobs = angular.module('blocJobs', ["ui.router", "firebase"])
blocJobs.config(function($stateProvider, $urlRouterProvider){
    
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

     $stateProvider
     .state('landing', {
         url: '/',
         templateUrl: '/templates/landing.html'
     })
    .state('job-post', {
        url: "/job-post",
        controller: 'JobPostCtrl',
        templateUrl: "/templates/job-post.html"
    })
})