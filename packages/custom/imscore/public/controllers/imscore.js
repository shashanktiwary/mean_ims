(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.imscore')
    .controller('ImscoreController', ImscoreController);

  ImscoreController.$inject = ['$scope', 'Global', 'Imscore'];

  function ImscoreController($scope, Global, Imscore) {
    $scope.global = Global;
    $scope.package = {
      name: 'imscore'
    };
  }
})();