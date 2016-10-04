craftEd.controller('RecsController', ['$scope', '$http', function($scope, $http){

    var tokens = {
      headers: {
        "access-token": window.sessionStorage.token,
        "token-type": "Bearer",
        "client": window.sessionStorage.client,
        "expiry": window.sessionStorage.expiry,
        "uid": window.sessionStorage.uid
      }
    };


    $http.get(rootUrl + '/users/:id/beer_types/rec_new', tokens)
    .then(function(response){
      $scope.allNewRecs = response.data
    });
}]);
