// note: should be made redundant, authentication moved to satellizer
(function () {
	'use strict'
	angular
		.module('app.pages.login')
		.service('loginService', LoginService)

	LoginService.$inject = ['$http', '$q']
	function LoginService($http, $q) {
		this.login = function login(user) {
			var deferred = $q.defer()

			$http.post('/api/auth/login', user).then(function (response) {
				deferred.resolve(response.data)
			}, function (error) {
				deferred.reject(error.data.message)
			})

			return deferred.promise
		}
	}
})();