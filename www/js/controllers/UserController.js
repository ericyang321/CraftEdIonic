craftEd.controller('UserController', function($scope, $location, $http){
  $http({
    method: 'POST',
    url: 'rootUrl',
    data: $scope.user
  }).success(function(data){
    $location.path('#/flavors')
  })

});
