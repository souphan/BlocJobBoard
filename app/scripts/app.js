var blocJobs = angular.module('blocJobs', ["ui.router", "firebase", "jcs-autoValidate", "ngAnimate", "ui.bootstrap", "satellizer"]);

// FORM VALIDATION CUSTOM MESSAGES
blocJobs.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['jobTitle'] = 'Job title can only contain numbers and letters';
        errorMessages['companyName'] = 'Company name can only contain numbers and letters';
        errorMessages['jobDescription'] = 'Please enter a URL, or description of job';
        errorMessages['postalCode'] = 'Please enter a valid postal code';
    })       
});

blocJobs.config(function($stateProvider, $urlRouterProvider){
    
    // FOR ANY UNMATCHED URL SEND TO /landing
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

blocJobs.config(function($authProvider) {
    $authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    // Optional: For client-side use (Implicit Grant), set responseType to 'token'
    $authProvider.facebook({
      clientId: 'Facebook App ID',
      responseType: 'token'
    });

    $authProvider.google({
      clientId: 'Google Client ID'
    });

    $authProvider.github({
      clientId: 'GitHub Client ID'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });

    $authProvider.instagram({
      clientId: 'Instagram Client ID'
    });

    $authProvider.yahoo({
      clientId: 'Yahoo Client ID / Consumer Key'
    });

    $authProvider.live({
      clientId: 'Microsoft Client ID'
    });

    $authProvider.twitch({
      clientId: 'Twitch Client ID'
    });

    $authProvider.bitbucket({
      clientId: 'Bitbucket Client ID'
    });

    // No additional setup required for Twitter

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
    
$authProvider.httpInterceptor = function() { return true; },
$authProvider.withCredentials = true;
$authProvider.tokenRoot = null;
$authProvider.baseUrl = '/';
$authProvider.loginUrl = '/auth/login';
$authProvider.signupUrl = '/auth/signup';
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.tokenName = 'token';
$authProvider.tokenPrefix = 'satellizer';
$authProvider.authHeader = 'Authorization';
$authProvider.authToken = 'Bearer';
$authProvider.storageType = 'localStorage';

// Facebook
$authProvider.facebook({
  name: 'facebook',
  url: '/auth/facebook',
  authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
  redirectUri: window.location.origin + '/',
  requiredUrlParams: ['display', 'scope'],
  scope: ['email'],
  scopeDelimiter: ',',
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 580, height: 400 }
});

// Google
$authProvider.google({
  url: '/auth/google',
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: window.location.origin,
  requiredUrlParams: ['scope'],
  optionalUrlParams: ['display'],
  scope: ['profile', 'email'],
  scopePrefix: 'openid',
  scopeDelimiter: ' ',
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 452, height: 633 }
});

// GitHub
$authProvider.github({
  url: '/auth/github',
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  redirectUri: window.location.origin,
  optionalUrlParams: ['scope'],
  scope: ['user:email'],
  scopeDelimiter: ' ',
  type: '2.0',
  popupOptions: { width: 1020, height: 618 }
});

// Instagram
$authProvider.instagram({
  name: 'instagram',
  url: '/auth/instagram',
  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
  redirectUri: window.location.origin,
  requiredUrlParams: ['scope'],
  scope: ['basic'],
  scopeDelimiter: '+',
  type: '2.0'
});

// LinkedIn
$authProvider.linkedin({
  url: '/auth/linkedin',
  authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
  redirectUri: window.location.origin,
  requiredUrlParams: ['state'],
  scope: ['r_emailaddress'],
  scopeDelimiter: ' ',
  state: 'STATE',
  type: '2.0',
  popupOptions: { width: 527, height: 582 }
});

// Twitter
$authProvider.twitter({
  url: '/auth/twitter',
  authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
  redirectUri: window.location.origin,
  type: '1.0',
  popupOptions: { width: 495, height: 645 }
});

// Twitch
$authProvider.twitch({
  url: '/auth/twitch',
  authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
  redirectUri: window.location.origin,
  requiredUrlParams: ['scope'],
  scope: ['user_read'],
  scopeDelimiter: ' ',
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 500, height: 560 }
});

// Windows Live
$authProvider.live({
  url: '/auth/live',
  authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
  redirectUri: window.location.origin,
  requiredUrlParams: ['display', 'scope'],
  scope: ['wl.emails'],
  scopeDelimiter: ' ',
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 500, height: 560 }
});

// Yahoo
$authProvider.yahoo({
  url: '/auth/yahoo',
  authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
  redirectUri: window.location.origin,
  scope: [],
  scopeDelimiter: ',',
  type: '2.0',
  popupOptions: { width: 559, height: 519 }
});

// Bitbucket
$authProvider.bitbucket({
  url: '/auth/bitbucket',
  authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
  redirectUri: window.location.origin + '/',
  optionalUrlParams: ['scope'],
  scope: ['email'],
  scopeDelimiter: ' ',
  type: '2.0',
  popupOptions: { width: 1020, height: 618 }
});

// Generic OAuth 2.0
$authProvider.oauth2({
  name: null,
  url: null,
  clientId: null,
  redirectUri: null,
  authorizationEndpoint: null,
  defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
  requiredUrlParams: null,
  optionalUrlParams: null,
  scope: null,
  scopePrefix: null,
  scopeDelimiter: null,
  state: null,
  type: null,
  popupOptions: null,
  responseType: 'code',
  responseParams: {
    code: 'code',
    clientId: 'clientId',
    redirectUri: 'redirectUri'
  }
});

// Generic OAuth 1.0
$authProvider.oauth1({
  name: null,
  url: null,
  authorizationEndpoint: null,
  redirectUri: null,
  type: null,
  popupOptions: null
});
    // NO ADDITIONAL SETUP REQUIRED FOR TWITTER
    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
});



// RE-USABLE FACTORY THAT GENERATES THE $firebaseAuth INSTANCE
blocJobs.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://keodo-todo-list.firebaseio.com");
  return $firebaseAuth(ref);
});

// FILTER JOBS USING PAGINATION BY SLICING THROUGH INDEX
blocJobs.filter('startFrom', function() {
    return function(data, start){
        return data.slice(start);
    }
});

// navi-menu DIRECTIVE USED FOR EACH TEMPLATE
blocJobs.directive("naviMenu", function() {
    return {
        template: '<nav class="navbar"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="landing">BLOC</a></div><ul class="nav navbar-nav"><li><a class="navbar-front" href="#">Frontend Web Development</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="">Roadmaps <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#">Page 1-1</a></li><li><a href="#">Page 1-2</a></li><li><a href="#">Page 1-3</a></li></ul></li><li><a class="navbar-mess" href="#">Messages</a></li><li><a class="navbar-sched" href="#">Schedule</a></li><li><a class="navbar-acc" href="#"><span class="glyphicon"></span>Account</a></li><li><a class="navbar-log" href="#" ng-click="login()" ng-hide="authData"><span class="glyphicon"></span>Log in</a><a class="navbar-log" href="#" ng-click="logout()" id="log-out" ng-show="authData"><span class="glyphicon"></span>Log out</a></li></ul></div></nav>'
    }
});
