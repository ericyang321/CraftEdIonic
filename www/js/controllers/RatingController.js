craftEd.controller('RatingController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://how-to-train-your-palate-api.herokuapp.com/users/:id/beer_types/:id/tried_beer_ratings/new')
    .then(function(response){
      console.log(response);
      $scope.allTags= response.data
    });
}]);
