craftEd.controller('InfoController', ['$scope', '$http', '$location', '$state',function($scope, $http, $location, $state){

  var config = {
    headers: {
      'content-type': 'application/json'
    }
  }

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

 $http.get(rootUrl + '/users/:user_id/tried_beer_ratings/:id/beer_types', tokens)
    .then(function(response){
      $scope.allInfos= response.data
    });
}])
