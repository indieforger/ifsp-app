(function() {
'use strict';

	angular
		.module('IFSP.App.Common')
		.constant('resolver', {
			allowRegisteredOnly: allowRegisteredOnly
		})

		function allowRegisteredOnly ($q, $location, $auth) {
				var deferred = $q.defer()
				if ($auth.isAuthenticated()) {
					deferred.resolve()
				} else {
					$location.path('/login')
					deferred.reject()
				}
				return deferred.promise
		}

})();