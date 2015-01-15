'use strict';

/**
 * @ngdoc directive
 * @name mdsv2App.directive:contact
 * @description
 * # contact
 */

angular
    .module('mdsv2App')
    .directive('rhContact', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {

            //Responsive Image Solution
            //Inspired by: http://tech.particulate.me/javascript/2013/10/10/how-to-conveniently-check-for-responsive-breakpoints-in-javascript/
                var result = getComputedStyle(element[0], ':after').content;
                result = result.replace(/"/g,''); //Because Firefox keeps quotes from content
                switch (result) {
                    case 'phone' :
                        element.children()[0].classList.add('contactdark-mail');
                        element.children()[1].classList.add('contactdark-github');
                        element.children()[2].classList.add('contactdark-twitter');
                    break;
                    case 'tablet' :
                        element.children()[0].classList.add('contactdark-mail');
                        element.children()[1].classList.add('contactdark-github');
                        element.children()[2].classList.add('contactdark-twitter');
                    break;
                    case 'laptop' :
                        element.children()[0].classList.add('contact-mail');
                        element.children()[1].classList.add('contact-github');
                        element.children()[2].classList.add('contact-twitter');
                    break;
                    case 'desktop' :
                        element.children()[0].classList.add('contact-mail');
                        element.children()[1].classList.add('contact-github');
                        element.children()[2].classList.add('contact-twitter');
                    break;
                }
            }
        };
    });
