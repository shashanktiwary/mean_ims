(function () {
  'use strict';
  
  angular.module('mean.imscore').factory('Location', ['$resource',
	function($resource) {
		return $resource('api/imscore/locations/:id', 
        {
			id: '@_id',
            active: 'active'
		},
        {query: {method: 'GET', isArray:true}}, 
        {
			update: {
				method: 'PUT'
			}
		});
	}
]);

})();
