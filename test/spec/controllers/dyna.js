'use strict';

describe('Controller: DynaCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var DynaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DynaCtrl = $controller('DynaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DynaCtrl.awesomeThings.length).toBe(3);
  });
});
