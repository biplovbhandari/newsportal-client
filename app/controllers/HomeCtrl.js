'use strict';

angular.module('mainApp')
.controller('HomeCtrl', function(authService) {

	var home = this;

	home.authData = authService.authData;
});