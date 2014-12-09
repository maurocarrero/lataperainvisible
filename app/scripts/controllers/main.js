'use strict';

angular.module('taperaApp')
  .controller('MainCtrl', function ($scope, $location) {
    
    $scope.chat = function () {
    	$location.path('/chat');
    };

  });
