angular.module('contactService', [])
    .factory('Contact', function($http){
        return{
            get : function(){
                return $http.get('/contacts');
            },

            getOne : function(id){
                return $http.get('/contacts/' + id);
            },

            update : function(id, data){
                return $http.put('/contacts/' + id, data);
            },

            save : function(contactData){
                return $http.post('/contacts', contactData);
            },

            destroy : function(id){
                return $http.delete('/contacts/' + id);
            }
        };
    
    });
