var app = angular.module('contacts', ['contactService', 'mainController', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'contactController'
            })

            .when('/contact/:id', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactDetailsController'
            })

            .when('/contact/:id/edit', {
                templateUrl : 'pages/edit.html',
                controller  : 'contactDetailsController'
            })

            .when('/newcontact', {
                templateUrl : 'pages/new.html',
                controller  : 'contactController'
            });

    });
