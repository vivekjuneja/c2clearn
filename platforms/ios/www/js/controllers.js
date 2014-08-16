angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

	/** Controller for Dashboard Screen **/
	  $scope.showAlert = function() {
                  navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
             };


	  $scope.captureSuccess = function(mediaFiles) {
                  alert("Hello");
             };


	  $scope.captureError = function(mediaFiles) {
                  alert("World");
             };
 

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
