'use strict';

angular.module('mainApp')
.service('authService', function() {
	
	var authService = this;

	authService.authData = {};

	authService.setLoginData = function (authData) {

		authService.authData = authData;

	}

});