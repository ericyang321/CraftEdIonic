craftEd.controller('FlavorController', ['$scope', '$http', function($scope, $http){

  var tokens = {
    headers: {
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  console.log(tokens)

  $http.get(
    'http://how-to-train-your-palate-api.herokuapp.com/users/:user_id/flavors/new',
    tokens
  )
   .then(function(response){
      $scope.allFlavors = response.data
    });

  $scope.submitFlavors = function(){
   data = {};
   $http.post(rootUrl +'/v1/auth/users/:user_id/flavors', data, config)
      .then(function(response){
        storeSession(response);
      })
    $location.path('#/home');
  }

}]);
