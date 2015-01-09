angular.module('loginController', ['authenticationService'])
    .controller('loginCtrl', function($scope, $location, Auth){
        window.scope = $scope;
        $scope.credentials = {};
        $scope.login = function () {
            Auth.login($scope.credentials);
        };
        $scope.logout = function () {
            Auth.logout();
            $location.path('/');
        }
    });