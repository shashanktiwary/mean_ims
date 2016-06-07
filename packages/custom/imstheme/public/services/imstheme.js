(function () {
  'use strict';

  angular
    .module('mean.imstheme')
    .factory('Imstheme', Imstheme);

  Imstheme.$inject = [];

  function Imstheme() {
    return {
      name: 'imstheme'
    };
  }
})();
