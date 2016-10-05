craftEd.controller('OldLikeController', ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){

  var config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  var tokens = {
    headers: {
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  var tokensConfig = {
    headers: {
      'content-type': 'application/json',
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  $scope.onDrag = function(id) {
    $state.go('rating',{beerId: id})
  }

  $http.get(rootUrl + '/users/:user_id/beer_types/rec_like', tokens)
    .then(function(response){
      $scope.allRecs = response.data
      $scope.rootUrl = rootUrl
      $scope.title = "Beers I'll probably like"
    });

  $scope.selectBeer = function(newRecId){
    $state.go('app.rating',{beerId: newRecId})
  };
}])

.directive('oldRateDrag', ['$scope', '$state', function($scope, $state){
  
}]);

