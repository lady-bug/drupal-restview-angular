app.service('TasksService',function($http){
  var getTasksUrl = 'http://localhost/es/tasks?_format=json';
  var addTaskUrl = 'http://localhost/rest/type/node/task';
  var deleteTaskUrl = 'http://localhost/node/';
  var getTaskUrl = 'http://localhost/es/tasks?_format=json/';

  this.getTasks = () => {
    return $http({
        method : 'GET',
        url : getTasksUrl,
        headers: {
          'Accept': 'application/json, */*',
        }
    }).then(
        function successCallback(response) {
            return response.data;
        },
        function errorCallback(response) {
            return {
                error : true
            };
        });

  }//-- end getTasks

  this.getTask = (nid) => {

  }//-- end getTask

  this.deleteTask = (nid) => {
    return $http({
      url: `${deleteTaskUrl}${nid}`,
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': 'E0Ky5I3b3Zls12R9eaUrzsCJZkrOTK3Ph26JzzXj25Y',
        'Content-Type': 'application/hal+json',
      }

    }).then(
      function successCallback(response){
        //return the object so we can access properties such as nid and confirm to the user it has been deleted
        return response;
      },
      function errorCallback(reponse){
        //return error if pb at the creation
        return {
            error : true
        };
      }
    );
  }//-- end deleteTask

  this.addTask = (newTask) => {
    var package = {
      'title': {'value': newTask.title},
      'body': {'value': newTask.body},
      '_links': {'type': {'href': addTaskUrl}},
    }

    return $http({
      method: 'POST',
      url: 'http://localhost/entity/node?_format=hal_json',
      data: JSON.stringify(package),
      headers: {
        'X-CSRF-Token': 'E0Ky5I3b3Zls12R9eaUrzsCJZkrOTK3Ph26JzzXj25Y',
        'Content-Type': 'application/hal+json',
        'Accept': 'application/json, */*',
      }

    }).then(
      function successCallback(response){
        //return the object so we can access properties such as nid and confirm to the user it has been created
        return response;
      },
      function errorCallback(reponse){
        //return error if pb at the creation
        return {
            error : true
        };
      }
    );
  }//-- end addTask

})
