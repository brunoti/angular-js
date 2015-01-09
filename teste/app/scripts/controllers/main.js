'use strict';

/**
 * @ngdoc function
 * @name testingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testingApp
 */
angular.module('testingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
