craftEd.controller('FlavorController', ['$scope', '$http', '$location', '$ionicPopup',function(
  $scope, $http, $location, $ionicPopup){

  var config = {
    headers: {
      'content-type': 'application/json'
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

  var tokens = {
    headers: {
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  $http.get(rootUrl +'/users/:user_id/flavors/new', tokensConfig)
    .then(function(response){
      $scope.allFlavors = response.data

      // selected flavors
      $scope.selection = [];

      // toggle selection for a given flavor by ID
      $scope.toggleSelection = function toggleSelection(flavor) {
        var flavorSelector = angular.element(document.querySelector('checkboxes'));

        var idx = $scope.selection.indexOf(flavor[0]);

        // is currently selected
        if (idx > -1) {
          $scope.selection.splice(idx, 1);
          document.getElementById("flavor-label-" + flavor[0]).className = " flavor-choose-button ng-binding"
        }

        // is newly selected
        else {
          $scope.selection.push(flavor[0]);
          document.getElementById("flavor-label-" + flavor[0]).className += " selected"
        }
        // console.log(selection)
      };
    });

    $scope.submitFlavors = function(){
      data = {flavorid: $scope.selection};
      $http.post(rootUrl +'/users/:user_id/flavors', data, tokens)
        .then(function(response){
          $location.path('/app/profile');
      })
  }

}]);
