'use strict';

angular.module('taperaApp')
  .directive('taperaFooter', function () {
    return {
      templateUrl: 'views/directives/_tapera-footer.html',
      restrict: 'E'
    };
  });
