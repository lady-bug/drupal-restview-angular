app.controller('TaskList',['$scope','$http','TasksService',function($scope,$http,TasksService){
  let resetForm = () => {
    $scope.newTask.title="";
    $scope.newTask.body="";
  };
  //get all tasks
  TasksService.getTasks().then((data) => {$scope.tasks = data});

  //delete a task: nid
  $scope.deleteTask = (id) => {
    TasksService.deleteTask(id).then((response) => {
      //access returned response to confirm deletion or error
      //console.log(response);
      TasksService.getTasks().then((data) => {$scope.tasks = data});
    });
  };

  //add a new task
  $scope.newTask = () => {
    TasksService.addTask($scope.newTask).then((response) => {
      //access returned response to confirm creation or error
      //console.log(response);
      resetForm();
      TasksService.getTasks().then((data) => {$scope.tasks = data});
    });
  };
}]);

app.controller('SingleTask',['$scope','$http','$routeParams','TasksService',function($scope,$http,$routeParams,TasksService){

  return $http({
      method : 'GET',
      url : 'http://localhost/es/node/' + $routeParams.id + '?_format=hal_json',
      headers: {
        'Accept': 'application/hal+json, */*',
      }
  }).success(function(response){
    console.log(response);
      $scope.task = response;
  });


}]);
