(function () {

angular.module('app.signin')
  .directive('signIn', signIn)

function signIn () {
  return {
    link: link,
    restrict: 'EA',
    templateUrl: './auth.html',
    scope: {
      data: '=',
      func: '&'
    }
  };

  function link (scope, el, attrs) {
    console.log('auth dir created');
  }
}

});