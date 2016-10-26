craftEd.controller('RatingController', ['$scope', '$http', '$location', '$state',function($scope, $http, $location, $state) {

  // $scope.$on("$ionicView.enter", function(){
  //   console.log("hi!")
  //   $state.go($state.current, {reload: true, inherit: false});
  // })

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
        var flavorSelector = angular.element(document.querySelector('tag-select-box'));
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
            document.getElementById("tag-label-" + tag.id).className = " tag ng-binding"
          }

        else {
          $scope.selection.push(tag.id);
          document.getElementById("tag-label-" + tag.id).className += " selected"
        }
      };
    });



  $scope.submitRating = function(){
    $scope.selection.push($scope.allTags.mainType.id);
    data = {tagIds: $scope.selection, comment: $scope.comment, rating: $scope.rating};
    $http.post(rootUrl +'/users/:user_id/tried_beer_ratings', data, tokens)
      .then(function(response){
      $state.go('app.info');

    })
  }

}]);
