craftEd.controller('RatingController', ['$scope', '$http', '$location', '$state',function($scope, $http, $location, $state) {

  var config = {
    headers: {
      'content-type': 'application/json'
    }
  }

  var beerId = $state.params.beerId;

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

  $http.get(rootUrl + '/users/:user_id/beer_types/' + beerId + '/tried_beer_ratings/new', tokensConfig)
    .then(function(response){
      $scope.allTags= response.data

      $scope.selection = [];
      $scope.toggleSelection = function toggleSelection(tag) {
        var idx = $scope.selection.indexOf(tag.id);

        if (idx > -1) {
            $scope.selection.splice(idx, 1);
          }

        else {
          $scope.selection.push(tag.id);
        }
      };
    });

  $scope.submitRating = function(){
    $scope.selection.push($scope.allTags.mainType.id);
    data = {tagIds: $scope.selection, comment: $scope.comment, rating: $scope.rating};
    $http.post(rootUrl +'/users/:user_id/tried_beer_ratings', data, tokens)
      .then(function(response){
    })
    $location.path('/info');
  }

}]);
