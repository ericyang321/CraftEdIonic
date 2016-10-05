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

// .directive('rateDragging', function(){
//   return{
//     template: {{allRecs[1]}}
//   };
// });



.controller('RateDrag', ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){

  $('.coaster').draggable({
    axis: 'x',
    containment: 'parent',
    start: function(event, ui){
      $(this).siblings('.slide').fadeOut('fast')
    },
    drag: function(event, ui, $scope) {
       var dragBeer = function(newRecId){
        $state.go('app.rating',{beerId: newRecId})
      }
      // THIS IS THE PART WHERE IT REROUTES PAST -153 PIXEL MOVEMENT
      if (ui.position.left < -153) {
        var draggedId = $(this).attr('id');
        console.log(draggedId);
        dragBeer(draggedId);
        $(this).animate({
          left: 0
        })
        $(this).siblings('.slide').fadeIn('fast')
      }
    },
    stop: function(event, ui) {

      if (ui.position.left > -153) {
        $(this).animate({
          left: 0
        })
        $(this).siblings('.slide').fadeIn('fast')
      }
    }

    
  })
}]);
