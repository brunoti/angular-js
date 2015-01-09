angular.module('contactsController', ['contactService'])
    .controller('contactsCtrl', function($scope, $location, $http, Contact){
        $scope.contactNew = {};

        Contact.get()
            .success( function(data) {
                $scope.contacts = data;
            });

        $scope.saveContact = function (){
            Contact.save($scope.contactNew)
                .success( function(data) {
                    Contact.get()
                        .success( function(data) {
                            $scope.contacts = data;
                        });
                    $location.path('/');
                })

                .error(function(data){
                    console.log(data);
                    $location('/');
                });
        };
    });
