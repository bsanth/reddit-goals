angular.module('starter.controllers', [])

.controller('GoalsCtrl', function($scope, $sce, goalService) {

  $scope.isGoalVideo = function (item) {
    if(item.data.title.indexOf(" goal ") > 0 && (item.data.media_embed != null || item.data.secure_media_embed != null)) {
      return true;
    }
    return false;
  };

  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  $scope.trustUrl1 = function (url) {
    var urlSplit = url.split('/');
    var videoId = urlSplit[urlSplit.length - 1];
    return $sce.trustAsResourceUrl('http://cdn.streamable.com/video/mp4-mobile/' + videoId + '.mp4');
  };

  $scope.toggleVideo = function (item) {
    if(item.showVideo) {
      item.showVideo = !item.showVideo;
    } else {
      item.showVideo = true;
    }
  };

  $scope.toggleAlt = function (item) {
    if(item.showAlt) {
      item.showAlt = !item.showAlt;
    } else {
      item.showAlt = true;
    }
    console.log(decodeURI(item.data.media_embed.content).replace(/&gt;/g, '>').replace(/&lt;/g, '<'));
  };

  $scope.getGoals = function () {
    goalService.getGoals().then(function (response) {
    console.log(response.data);
      $scope.goals = response.data.data.children;
    }, function (error) {
      $ionicLoading.show({
        template: 'Failed to get goals',
        duration: '1000'
      });
    });
  };

  $scope.getGoals();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

})

