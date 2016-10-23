function MainController($scope) {
  $scope.name = 'Peter';
  $scope.email = 'peterberwind@gmail.com';
  $scope.phone = '555.555.5555';
}

angular
  .module('app')
  .controller('MainController', MainController);
