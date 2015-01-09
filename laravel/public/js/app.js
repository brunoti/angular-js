var app = angular.module('contacts', [
        'loginController',
        'contactController',
        'contactsController',
        'ngRoute'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl : "pages/login-form.html",
                controller  : "loginCtrl"
            })

            .when('/contacts', {
                templateUrl : 'pages/home.html',
                controller  : 'contactsCtrl'
            })

            .when('/contact/:id', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl'
            })

            .when('/contact/:id/edit', {
                templateUrl : 'pages/edit.html',
                controller  : 'contactCtrl'
            })

            .when('/newcontact', {
                templateUrl : 'pages/new.html',
                controller  : 'contactCtrl'
            })

            .otherwise({redirectTo: '/'});

    });
