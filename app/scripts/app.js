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
})