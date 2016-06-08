(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.imscore')
    .controller('LocationController', LocationController);

  LocationController.$inject = ['$scope', 'Global', 'Location'];

  function LocationController($scope, Global, Location) {
    $scope.global = Global;
    $scope.package = {
      name: 'imscore'
    };
    
    Location.query({active:true}, function(locations){
        $scope.locations = locations;
    });
    
  }
})();