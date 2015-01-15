'use strict';

/**
 * @ngdoc directive
 * @name mdsv2App.directive:moveBrand
 * @description
 * # moveBrand
 */

angular.module('mdsv2App')
  .directive('rhBrand', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        scope.$on('add', function (e, msg) {
          element.addClass(attrs.class + '-' + msg);
          for (var i = element.children().length - 1; i >= 0; i--) {
            var cN = element.children()[i].className;
            element.children()[i].classList.length !== 2 ? element.children()[i].classList.add(cN + '-' + 'clicked') : null;
          }
        });

        scope.$on('remove', function (e, msg) {
          element.removeClass(attrs.class + '-' + msg);
          for (var i = element.children().length - 1; i >= 0; i--) {
            var base = element.children()[i].classList.item(0);
            var clicked = element.children()[i].classList.item(1);
            var final = base + '-clicked';
            if (clicked == final) {
              element.children()[i].classList.remove(final);
            }
          }
        });
      }
    };
  });
