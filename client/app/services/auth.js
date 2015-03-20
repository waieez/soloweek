(function () {
'use strict';

angular.module('app.auth', [])
  .factory('Auth', Auth);


Auth.$inject = ['$http'];
function Auth ($http) {


  return {
    post: post
  };

  function post (endpoint, data) {
    var url = 'http://localhost:3000/api/users';
    return $http({
      url: url + endpoint,
      method: 'POST',
      data: data
    });
  }
}

})();