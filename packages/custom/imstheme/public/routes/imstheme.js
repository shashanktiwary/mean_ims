(function () {
  'use strict';

  angular
    .module('mean.imstheme')
    .config(imstheme);

  imstheme.$inject = ['$stateProvider'];

  function imstheme($stateProvider) {
    $stateProvider.state('imstheme example page', {
      url: '/imstheme/example',
      templateUrl: 'imstheme/views/index.html'
    });
  }

})();
