var app = angular.module('taskApp',['ngRoute','ngSanitize','ngAnimate']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
  $routeProvider.when('/task/:id',{
    templateUrl: 'single_task.php',
    controller: 'SingleTask',
  });
  $locationProvider.html5Mode(true);
}]);
