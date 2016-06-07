(function () {
  'use strict';

  angular
    .module('mean.imscore')
    .factory('Imscore', Imscore);

  Imscore.$inject = [];

  function Imscore() {
    return {
      name: 'imscore'
    };
  }
})();
