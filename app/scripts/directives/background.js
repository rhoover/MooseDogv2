'use strict';

/**
 * @ngdoc directive
 * @name mdsv2App.directive:background
 * @description
 * # background
 */
angular.module('mdsv2App')
    .directive('rhbackground', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
            //Responsive Image Solution
            //Inspired by: http://tech.particulate.me/javascript/2013/10/10/how-to-conveniently-check-for-responsive-breakpoints-in-javascript/
                var result = getComputedStyle(element[0], ':after').content;
                result = result.replace(/"/g,''); //Because Firefox keeps quotes from content
                switch (result) {
                    // case 'phone' :
                    //     element.addClass("bg-small");
                    // break;
                    case 'tablet' :
                        element.addClass('bg-tablet');
                    break;
                    // case 'small-desktop' :
                    //     element.addClass("bg-small-desktop");
                    // break;
                    case 'desktop' :
                        element.addClass('bg-desktop');
                    break;
                }
            }
        };
    });
