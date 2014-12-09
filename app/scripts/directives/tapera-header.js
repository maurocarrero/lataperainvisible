'use strict';

angular.module('taperaApp')
  .directive('taperaHeader', function ($location) {
    return {
      templateUrl: 'views/directives/_tapera-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
        scope.about = function () {
    			$location.path('/about');
  	  	};

  	  	scope.contact = function () {
  	  		$location.path('/contact');
  	  	};

        scope.home = function () {
          $location.path('/');
        };
      }
    };
  });
