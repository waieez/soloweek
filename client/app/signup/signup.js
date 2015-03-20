(function(){

angular.module('app.signup', [])
  .controller('SignupCtrl', SignupCtrl);

SignupCtrl.$inject = ['$scope', 'Auth'];
function SignupCtrl ($scope, Auth) {
  var vm = this;
  vm.user = {};
  vm.submit = function (user) {
    Auth.post('/signup', user)
      .then(function (res) {
        $location.path('/');
      });
  };
}

})();