angular.module('sessionService',[])
    .factory('Session', function(){
        return {
            set: function (key, value) {
                sessionStorage.setItem(key,value);
            },
            get: function (key) {
                sessionStorage.getItem(key);
            },
            clear: function (key) {
                sessionStorage.removeItem(key);
            },
        };
    });