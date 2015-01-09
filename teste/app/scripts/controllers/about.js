'use strict';

/**
 * @ngdoc function
 * @name testingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testingApp
 */
angular.module('testingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
