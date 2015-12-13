(function () {
	var module = angular.module('IFSP.App.Pages.Settings', [
		'ngRoute',
		'app.com'
	])

	module.config(['$routeProvider', 'resolver',
		function($routeProvider, resolver) {

		$routeProvider.when('/settings', {
			templateUrl: 'pages/settings/settings.tpl.html',
			resolve: {
				canAccess: resolver.allowRegisteredOnly
			}
		})
	}])
})()