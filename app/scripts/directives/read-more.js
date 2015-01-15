'use strict';

/**
 * @ngdoc directive
 * @name mdsv2App.directive:readMore
 * @description
 * # readMore
 */

angular.module('mdsv2App')
  .directive('rhRead', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.on('click', function () {
            element.addClass('read-clicked');
            scope.$emit('message', 'clicked');
        });
      }
    };
  });
