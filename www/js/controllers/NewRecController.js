craftEd.controller('NewRecController', ['$scope', '$http', '$location', '$state',function($scope, $http, $location, $state){

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

  $http.get(rootUrl + '/users/:user_id/beer_types/rec_new', tokens)
    .then(function(response){
      $scope.allRecs= response.data
      $scope.rootUrl= rootUrl
      $scope.title = "Beers I've never tried"
    });

  $scope.selectBeer = function(newRecId){
    $state.go('rating',{beerId: newRecId})
  }
}]);
