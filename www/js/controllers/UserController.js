craftEd.controller('UserController', ['$scope', '$http', '$location', '$ionicPopup',function($scope, $http, $location, $ionicPopup){

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
    if(!$scope.password) {
        showAlert("Please enter a password.");
      }
    if(!$scope.email) {
        showAlert("Please enter an email address.");
      }
    else if($scope.password === $scope.password_confirmation && $scope.password.length >=8) {
      register = {email: $scope.email, password: $scope.password, password_confirmation: $scope.password_confirmation};
      $http.post(rootUrl + '/v1/auth', register, config)
        .then(function(response){
          storeSession(response);
          $location.path('/app/flavors');
        });
      }
    else if($scope.password.length < 8) {
      showAlert("Passwords must be at least 8 characters.");
      }
    else {
      $scope.password = "";
      $scope.password_confirmation = "";
      showAlert("Passwords did not match.");
    };
  };

  $scope.login = function(){
    if($scope.email && $scope.password) {
    login = {email: $scope.email, password: $scope.password};
    $http.post(rootUrl +'/v1/auth/sign_in', login, config)
      .then(function(response){
        storeSession(response);
        $location.path('/app/profile');
      })
      .catch(function(data){
        showAlert(data.data.errors[0]);
      });
    }
    else {
      showAlert("Invalid login, please try again.");
    }
  }

  $scope.logout = function() {
    window.sessionStorage.clear();
    $location.path('/app/home');
    // $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
  };
}]);
