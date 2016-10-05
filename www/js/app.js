// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var rootUrl = 'http://how-to-train-your-palate-api.herokuapp.com'
// var rootUrl = 'http://localhost:3000'

var craftEd = angular.module('craftEd', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'UserController'
  })


  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'UserController'
  })

  .state('flavors', {
    url: '/flavors',
    templateUrl: 'templates/flavors.html',
    controller: 'FlavorController'
  })

  .state('new_recs', {
    url: '/new_recs',
    templateUrl: 'templates/new_recs.html',
    controller: 'NewRecController'
  })

  .state('old_likes', {
    url: '/old_likes',
    templateUrl: 'templates/old_likes.html',
    controller: 'OldLikeController'
  })

  .state('rating', {
    url: '/rating/:beerId',
    templateUrl: 'templates/rating.html',
    controller: 'RatingController'
  })

  .state('info', {
    url: '/info',
    templateUrl: 'templates/info.html',
    controller: 'InfoController'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html'
  });
  // if none of the above states are matched, use this as the fall back
  $urlRouterProvider.otherwise('/home');

});

