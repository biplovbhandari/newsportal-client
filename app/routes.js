'use strict';

angular.module('mainApp')
.config(function($stateProvider, $urlRouterProvider) {
	
	//
	// For any unmatched url, redirect to /login
	$urlRouterProvider.otherwise('/login');
	//
	// Now set up the states

	// Login 
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'app/views/login.html',
		title: 'Login',
		controller: 'LoginCtrl',
		controllerAs: 'login'
	});

	// After Login -> Home Page 
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'app/views/home.html',
		title: 'Home Page',
		controller: 'HomeCtrl',
		controllerAs: 'home'
	});
});