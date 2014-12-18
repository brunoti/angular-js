(function() {
    var app = angular.module('todo', [ ]);
    var task = {
        name: "Go to the mall",
        finished: false
    };

    app.controller('TodoController', function(){
        this.task = task;
    
    });


})();
