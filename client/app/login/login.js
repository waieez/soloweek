(function(){

angular.module('app.login', [])
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$location', 'Auth'];
function LoginCtrl ($scope, $location, Auth) {
  var vm = this;
  vm.user = {};
  vm.submit = function (user) {
    Auth.post('/login', user)
      .then(function (res) {
        $location.path('/');
      });
  };
}

})();