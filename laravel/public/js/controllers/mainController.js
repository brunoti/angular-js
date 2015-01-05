angular.module('mainController', [])
    .controller('contactController', function($scope, $http, Contact){
        $scope.contactNew = {};

        Contact.get()
            .success( function(data) {
                $scope.contacts = data;
            });

        $scope.saveContact = function (){
            Contact.save(contact)
                .success( function(data) {
                    Contact.get()
                        .success( function(data) {
                            $scope.contacts = data;
                        });
                })

                .error(function(data){
                    console.log(data);
                });
        };
    })

    .controller('contactDetailsController', function($scope, $routeParams, $location, Contact){
        Contact.getOne($routeParams.id)
            .success(function(data){
                $scope.contact = data;
            });

        $scope.updateContact = function (){
            Contact.update($routeParams.id, $scope.contact)
                .success(function(data){
                    $location('/contact/' + data.id);
                });
        };

        $scope.deletar = function(){
            Contact.destroy($routeParams.id) 
                .success(function(data){
                    $location('/');
                });
        };
    });
