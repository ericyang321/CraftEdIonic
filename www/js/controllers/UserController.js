var config = {
  headers: {
    'content-type': 'application/json'
  }
};


craftEd.controller('UserController', ['$scope', '$http', '$location', '$ionicPopup',function($scope, $http, $location, $ionicPopup){

  function storeSession(response) {
    window.sessionStorage.token = response.headers('access-token');
    window.sessionStorage.client = response.headers('client');
    window.sessionStorage.expiry = response.headers('expiry');
    window.sessionStorage.uid = response.headers('uid')
  };

  showAlert = function(alert) {
    var alertPopup = $ionicPopup.alert({
      title: alert,
      cssClass: 'popupstyle'
    });
  };

  $scope.register = function(){
    if($scope.password === $scope.password_confirmation) {
      register = {email: $scope.email, password: $scope.password, password_confirmation: $scope.password_confirmation};
      $http.post(rootUrl + '/v1/auth', register, config);
      $location.path('#/flavors');
    }
    else {
      $scope.password = "";
      $scope.password_confirmation = "";
      showAlert("Passwords did not match.");
    };
  };

  $scope.login = function(){
    login = {email: $scope.email, password: $scope.password};
    $http.post(rootUrl +'/v1/auth/sign_in', login, config)
      .then(function(response){
        globalResponse = response;
        storeSession(response);
      })
    $location.path('#/home');
  }

  $scope.logout = function() {
    window.sessionStorage.clear();
  };
}]);
