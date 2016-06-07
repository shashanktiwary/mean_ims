(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.imstheme')
    .controller('ImsthemeController', ImsthemeController);

  ImsthemeController.$inject = ['$scope', 'Global', 'Imstheme'];

  function ImsthemeController($scope, Global, Imstheme) {
    $scope.global = Global;
    $scope.package = {
      name: 'imstheme'
    };
  }
})();