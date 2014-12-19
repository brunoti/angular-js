(function() {
    var app = angular.module('todo', [ ]);
    var tasks = [
        {
            name: "Go to the mall",
            finished: false
        },
        {
            name: "Go to the store", 
            finished: false
        },
        {
            name: "Call to Jhonny", 
            finished: false
        },
        {
            name: "Start the todo app", 
            finished: true,
        },
    ];
    app.factory('taskSend', function () {
      return tasks;
    });

    app.controller('TaskListController', function($scope, taskSend){
        this.tasks = taskSend;
    });
    
    app.controller('TaskFormController', function($scope, taskSend){
        this.task = { finished: false };
        this.addTask = function () {
            taskSend.push(this.task);
            console.log(taskSend);
            this.task = { finished: false };
        }; 
    });

})();
