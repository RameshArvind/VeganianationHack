angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,Notifications) {
  // window.open = cordova.InAppBrowser.open;
  document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
var onGPSSuccess = function(position) {
    // alert('Latitude: '          + position.coords.latitude          + '\n' +
    //       'Longitude: '         + position.coords.longitude         + '\n' +
    //       'Altitude: '          + position.coords.altitude          + '\n' +
    //       'Accuracy: '          + position.coords.accuracy          + '\n' +
    //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //       'Heading: '           + position.coords.heading           + '\n' +
    //       'Speed: '             + position.coords.speed             + '\n' +
    //       'Timestamp: '         + position.timestamp                + '\n');
    $scope.latlong = position.coords.latitude+":"+position.coords.longitude;
};
function onGPSError(error) {
    $scope.latlong = error.message;
}
// $scope.latlong = "Hello";
navigator.geolocation.getCurrentPosition(onGPSSuccess, onGPSError,{timeout : 15000});

$scope.openURL = function(latlong1){

// http://maps.google.com/maps?&z=10&q=36.26577+-92.54324&ll=36.26577+-92.54324
cordova.InAppBrowser.open("https://maps.google.com/maps?&z=10&q="+latlong1+"&ll="+latlong1, "_blank");
}

$scope.cameraClick = function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI });
function onSuccess(imageURI) {
  // href="#/tab/dash/new"
  var params = {
    image: imageURI
};
  $state.go('tab.dash-new',params);
}
  function onFail(message) {
    alert('Failed because: ' + message);
}
};

}
$scope.notifs = Notifications.all(); 
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.cameraClick = function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI });
function onSuccess(imageURI) {}
  function onFail(message) {
    alert('Failed because: ' + message);
}
};
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AboutCtrl', function($scope,$ionicPopup,$stateParams) {

   var image = document.getElementById('myImage');
   var reader = new FileReader();
   image.src = $stateParams.image;
   $scope.goBack = function(){
     $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
    // $state.go('dash');
   }
  // $scope.imageurl = $stateParams.image;
})
.controller('AccountCtrl', function($scope) {
  $scope.cameraClick = function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
  destinationType: Camera.DestinationType.FILE_URI });
function onSuccess(imageURI) {}
  function onFail(message) {
    alert('Failed because: ' + message);
}
};
  $scope.settings = {
    enableFriends: true
  };
});
