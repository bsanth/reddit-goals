angular.module('starter.controllers', [])

.controller('GoalsCtrl', function($scope, $sce, goalService) {

  $scope.isGoalVideo = function (item) {
    if((item.data.title.indexOf(" goal ") > 0 || item.data.title.indexOf("score") > 0) &&
          item.data.link_flair_text === "Media") {
      return true;
    }
    return false;
  };

  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  $scope.trustUrlAlt = function (url) {
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
  };

  $scope.getGoals = function () {
    goalService.getGoals().then(function (response) {
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

.controller('MatchesCtrl', function($scope, $sce, goalService) {

  $scope.isPostMatchThread = function (item) {
    if(item.data.link_flair_text === "Post Match Thread") {
      return true;
    }
    return false;
  };

  $scope.getMatches = function () {
    goalService.getMatches().then(function (response) {
      $scope.matches = response.data.data.children;
    }, function (error) {
      $ionicLoading.show({
        template: 'Failed to get matches',
        duration: '1000'
      });
    });
  };

  $scope.getMatches();

})

.controller('MatchDetailCtrl', function($scope, $stateParams) {
  console.log("test");
})

