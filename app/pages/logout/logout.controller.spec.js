describe('IFSP.App.Pages.Logout Controller', function() {
	'use strict'
	var $controller, $q, $rootScope, logoutCtrl, mock
 // -----------------------------
 // mock object
 // -----------------------------
	mock = {}
	mock.logoutDeferred = null
	mock.$auth = {
		logout : function () {
			return mock.logoutDeferred.promise
		}
	}
	mock.toastr = {
		info: function () { }
	}
	mock.resolveLogoutDeferred = function (cb) {
		mock.logoutDeferred.resolve()
		$rootScope.$digest()
	}

	// -----------------------------
	// test setup
	// -----------------------------
	beforeEach(module('IFSP.App.Pages.Logout'))
	beforeEach(module(function($provide) {
		$provide.value('$auth', mock.$auth)
		$provide.value('toastr', mock.toastr)
	}))

	beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _$auth_, _$location_, _$interval_, _toastr_) {
		$controller = _$controller_
		$q = _$q_
		$rootScope = _$rootScope_
		mock.logoutDeferred = $q.defer()
		mock.createController = function () {
			return $controller('LogoutController', {
				$location: _$location_,
				$auth: _$auth_,
				$interval: _$interval_,
				toastr: _toastr_
			})
		}
	}))

	// -----------------------------
	// test specs
	// -----------------------------
	it('should notify with info popup', function () {
		spyOn(mock.toastr, 'info')
		mock.createController()
		mock.resolveLogoutDeferred()
		expect(mock.toastr.info).toHaveBeenCalled()
	})

	it('should redirect to main page', function(done) {
		expect('not implemented test').toBe('ASYNC')
		done()
		/*
		return;
		inject(function($location, $rootScope) {
			console.log($location.path());
			$location.path('/controller-test')
			console.log($location.path());
			mock.createController()
			console.log($location.path());

			setTimeout(function() {
				console.log(1, $location.path());
				expect($location.path()).toEqual('/')
				done()
			}, 3500)
		})
		*/
	})
})
