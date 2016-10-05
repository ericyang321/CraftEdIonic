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

  $scope.onDrag = function(id) {
    $state.go('app.rating',{beerId: id});
  }

  $http.get(rootUrl + '/users/:user_id/beer_types/rec_new', tokens)
    .then(function(response){
      $scope.allRecs= response.data
      $scope.rootUrl= rootUrl
      $scope.title = "Beers I've never tried"
    });

  $scope.selectBeer = function(newRecId){
    $state.go('app.rating',{beerId: newRecId})
  }

  // $scope.onDrag = function(event){
  //   console.log('dragged!');
  //   var coaster = angular.element(document.querySelector('coaster'));
  //     coaster = event.pageX;
  // }
}])

// .directive('newratedrag', ['$scope', '$state', function($scope, $state){
// }]);

  // $('.coaster').draggable({
  //   axis: 'x',
  //   containment: 'parent',
  //   start: function(event, ui){
  //     $(this).siblings('.slide').fadeOut('fast')
  //   },
  //   drag: function(event, ui, $scope) {
  //      var dragBeer = function(newRecId){
  //       $state.go('app.rating',{beerId: newRecId})
  //     }
  //     // THIS IS THE PART WHERE IT REROUTES PAST -153 PIXEL MOVEMENT
  //     if (ui.position.left < -153) {
  //       var draggedId = $(this).attr('id');
  //       console.log(draggedId);
  //       dragBeer(draggedId);
  //     }
  //   },
  //   stop: function(event, ui) {

  //     if (ui.position.left > -153) {
  //       $(this).animate({
  //         left: 0
  //       })
  //       $(this).siblings('.slide').fadeIn('fast')
  //     }
  //   }
//   })
// }]);
