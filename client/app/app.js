(function () {
'use strict';

angular.module('app', [
  'app.auth',
  'app.login',
  'app.signup',

  'ngRoute'
  ])
  .config(config);

config.$inject = ['$routeProvider'];
function config ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'signup'
    })
    .otherwise({
      redirectTo: '/'
    });
}

})();