// angular.module("newsSummaryApp") same as newsSummaryApp
newsSummaryApp.controller("NewsSummaryController", ['NewsSummaryService', function(NewsSummaryService) {
    var self = this;

    self.greetings = [{text: "Hello, world"},  {text: 'Hi, world'}];
    // self.farewell = "Goodbye, cruel world";

     self.addGreeting = function(greeting) {
      self.greetings.push({text: greeting});
    };

      self.deleteGreeting = function() {
        self.greetings.pop();
      };
  }]);

  // newsSummaryApp.service('NewsSummaryService', ['$http', function($http) {
  //   var self = this;
  //     self.getAll = function() {
  //       console.log($http.get('http://news-summary-api.herokuapp.com/todos.json'));
  //     };
  //   }]);
