var config = {
  headers: {
        'content-type': 'application/json'
      }
  };


craftEd.controller('UserController', ['$scope', '$http', '$location', '$ionicPopup', function($scope, $http, $location, $ionicPopup){

  // function setHeader() {
  //   return {
  //     "access-token": window.sessionStorage.token,
  //     "token-type": "Bearer",
  //     "client": window.sessionStorage.client,
  //     "expiry": window.sessionStorage.expiry,
  //     "uid": window.sessionStorage.uid
  //   };
  // };

  // function storeSession(response, setUser) {
  //   window.sessionStorage.token = response.headers('access-token');
  //   window.sessionStorage.client = response.headers('client');
  //   window.sessionStorage.expiry = response.headers('expiry');
  //   window.sessionStorage.uid = response.headers('uid');
  //   window.sessionStorage.email = setUser.email;
  //   window.sessionStorage.first_name = setUser.first_name;
  //   window.sessionStorage.last_name = setUser.last_name;
  //   window.sessionStorage.nickname = setUser.nickname;
  //   window.sessionStorage.user_id = setUser.id;
  // };

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
    $http.post(rootUrl +'/v1/auth/sign_in', login, config);
    $location.path('#/profile');
  }

  //   if($scope.email && $scope.password) {
  //     authentication.authenticate($scope.email, $scope.password)
  //       .then(function(response) {
  //         storeSession(response, response.data.data);
  //         $state.go('home');
  //       })
  //       .catch(function(data) {
  //         showAlert(data.data.errors[0]);
  //       });
  //   }
  //   else {
  //     showAlert("Invalid Login");
  //   }
  // };

  // $scope.logout = function() {
  //   window.sessionStorage.clear();
  // };
}]);
