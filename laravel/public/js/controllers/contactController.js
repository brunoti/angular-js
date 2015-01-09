angular.module('contactController', ['contactService'])
    .controller('contactCtrl', function($scope, $routeParams, $location, Contact){
        Contact.getOne($routeParams.id)
            .success(function(data){
                $scope.contact = data;
            });

        $scope.updateContact = function (){
            Contact.update($routeParams.id, $scope.contact)
                .success(function(data){
                    $location.path('/contact/' + $scope.contact.id);
                });
        };

        $scope.deletar = function(){
            Contact.destroy($routeParams.id)
                .success(function(data){
                    $location.path('/');
                });
        };
    });
