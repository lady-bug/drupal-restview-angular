<!DOCTYPE html>
<html lang="en" ng-app="taskApp">
    <head>
        <base href="/angular/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>AngularJS 1.4/Drupal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.4.3/angular-route.min.js"></script>
        <script src="https://code.angularjs.org/1.4.3/angular-sanitize.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script src="https://code.angularjs.org/1.4.3/angular-animate.min.js"></script>

        <script src="app.js"></script>
        <script src="services.js"></script>
        <script src="controllers.js"></script>

        <style>
            .sidebar{
                float:left;
                padding:30px;
                width:30%;
                background-color:#f4f4f4;
                position:fixed;
                height:100%;
            }
            .content{
                float:left;
                padding:30px;
                width:70%;
                margin-left:30%;
            }
            hr{
                border-top:1px solid #ddd;
            }
            input,textarea{
                margin-bottom:8px;
            }
        </style>
    </head>
    <body>


        <div data-ng-controller="TaskList" class="sidebar">

          <h1>Tasks</h1>
          <hr />

          <ul>
            <li data-ng-repeat="task in tasks">
              <a href="task/{{task.nid}}" data-ng-bind-html="task.title"></a>
              (<span data-ng-click="deleteTask(task.nid)">x</span>)
            </li>
          </ul>

          <hr />

          <form data-ng-submit="newTask()">
            <div class="form-group">
            <lable>Create new task</label>
            <input class="form-control" type="text" data-ng-model="newTask.title" placeholder="task title" />
            <textarea class="form-control" data-ng-model="newTask.body" placeholder="task body"></textarea>
            <button class="btn btn-primary" type="submit">Add task</button>
            </div>
          </form>

        </div>

        <div data-ng-view class="content"></div>

    </body>
</html>
