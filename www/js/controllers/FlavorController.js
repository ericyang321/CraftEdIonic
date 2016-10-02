craftEd.controller('FlavorController', ['$scope', '$http', function($scope, $http){
    $http.get('http://how-to-train-your-palate-api.herokuapp.com/flavors')
    .then(function(response){
      console.log(response);
      $scope.allFlavors = response.data
    });
}]);
