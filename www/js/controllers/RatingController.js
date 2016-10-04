craftEd.controller('RatingController', ['$scope', '$http', '$location', function($scope, $http, $location) {

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
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  $http.get(rootUrl + '/users/:id/beer_types/:id/tried_beer_ratings/new', tokens)
    .then(function(response){
      $scope.allTags= response.data

      $scope.selection = [];
      $scope.toggleSelection = function toggleSelection(tag) {
        var idx = $scope.selection.indexOf(tag[0]);

        if (idx > -1) {
            $scope.selection.splice(idx, 1);
          }

        else {
          $scope.selection.push(tag[0]);
        }
      };
    });

}]);
