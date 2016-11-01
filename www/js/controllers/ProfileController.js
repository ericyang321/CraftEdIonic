craftEd.controller('ProfileController', ['$scope', '$http', '$location', '$ionicPopup', '$window',function($scope, $http, $location, $ionicPopup, $window){
// $scope.reload();
$scope.$on("$ionicView.afterEnter", function(event, data){
  console.log("hello")
}),

$scope.showPopup = function(){
  var myPopup = $ionicPopup.alert({
    title: 'Beer Wheel Guide',
    templateUrl: "templates/ProfileInstructionPopup.html",
    okText: 'Close'
  });
}

}]);
