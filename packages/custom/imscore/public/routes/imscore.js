(function () {
  'use strict';

  angular
    .module('mean.imscore')
    .config(imscore);

  imscore.$inject = ['$stateProvider'];

  function imscore($stateProvider) {
    $stateProvider.state('imscore example page', {
      url: '/imscore/example',
      templateUrl: 'imscore/views/locations.html'
    });
  }

})();
