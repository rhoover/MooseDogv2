'use strict';

describe('Directive: moveBrand', function () {

  // load the directive's module
  beforeEach(module('mdsv2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<move-brand></move-brand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the moveBrand directive');
  }));
});
