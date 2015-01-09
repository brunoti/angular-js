angular.module('flashService',[])
    .factory('Flash', function($rootScope){
        return {
            show: function(message){
                $rootScope.flash = message;
            },
            clear: function(message){
                $rootScope.flash = '';
            }
        };
    });