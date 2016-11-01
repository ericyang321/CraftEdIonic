craftEd.controller('HomeController', ['$scope', '$ionicPopup',function($scope, $ionicPopup){

$scope.showPopup = function(){
  var myPopup = $ionicPopup.alert({
    title: "Here's How CraftEd Works",
    templateUrl: "templates/HomeInstructionPopup.html",
    okText: 'Close'
  });
}

}]);
