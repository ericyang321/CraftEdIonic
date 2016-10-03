craftEd.controller('FlavorController', ['$scope', '$http', function($scope, $http){
    $http.get('http://how-to-train-your-palate-api.herokuapp.com/users/:id/flavors/new')
    .then(function(response){
      console.log(response);
      $scope.allFlavors = response.data
    });
}]);
