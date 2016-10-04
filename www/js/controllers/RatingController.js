craftEd.controller('RatingController', ['$scope', '$http', function($scope, $http) {

    var tokens = {
      headers: {
        "access-token": window.sessionStorage.token,
        "token-type": "Bearer",
        "client": window.sessionStorage.client,
        "expiry": window.sessionStorage.expiry,
        "uid": window.sessionStorage.uid
      }
    };

  $http.get(rootUrl + '/users/:id/beer_types/:id/tried_beer_ratings/new', tokens)
    .then(function(response){
      console.log(response);
      $scope.allTags= response.data
    });
}]);
