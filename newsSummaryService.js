// angular.module('newsSummaryApp', [])
newsSummaryApp.service('NewsSummaryService', ['$http', function($http) {
  var self = this;
    self.getAll = function() {
      $http.get('http://news-summary-api.herokuapp.com/');
    };
  }]);
