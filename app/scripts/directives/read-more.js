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

              if (element.hasClass('read-clicked') == false ){
                  element.addClass('read-clicked');
                  scope.$emit('add', 'clicked');
                  element.children()[0].innerHTML = 'Read Less';
              } else {
                element.removeClass('read-clicked');
                scope.$emit('remove', 'clicked');
                element.children()[0].innerHTML = 'Read More';
              }

        });
      }
    };
  });
