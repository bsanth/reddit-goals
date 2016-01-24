angular.module('starter.services', [])

.factory('goalService', function($http) {

  var getGoals = function() {
    var req = {
      method: 'GET',
      url: 'http://www.reddit.com/r/soccer.json?sort=new&from=week&limit=100',
    };
    return $http(req);
  };

  var api = {
    getGoals: getGoals,
  };

  return api;

});