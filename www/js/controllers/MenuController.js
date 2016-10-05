  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  craftEd.controller('MenuController', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
    $scope.$on("$ionicView.enter", function(event, data){
      if(window.sessionStorage.length){
        $scope.showLogin = false;
        $scope.showRegister = false;
        $scope.showLogout = true;
        $scope.showProfile = true;
      }
      else{
        $scope.showLogin = true;
        $scope.showRegister = true;
        $scope.showLogout = false;
        $scope.showProfile = false;
      }
    });
    var tokens = {
      headers: {
        "access-token": window.sessionStorage.token,
        "token-type": "Bearer",
        "client": window.sessionStorage.client,
        "expiry": window.sessionStorage.expiry,
        "uid": window.sessionStorage.uid
      }
    };

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}]);
