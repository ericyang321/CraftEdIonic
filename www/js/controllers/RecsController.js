craftEd.controller('RecsController', ['$scope', '$http', function($scope, $http){
    $http.get('http://how-to-train-your-palate-api.herokuapp.com/users/:id/beer_types/rec_new')
    .then(function(response){
      $scope.allNewRecs = response.data
    });
}]);
