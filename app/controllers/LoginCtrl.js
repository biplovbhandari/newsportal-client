'use strict';

angular.module('mainApp')
.controller('LoginCtrl', function(authService, $http, $sanitize, $location) {

	var ctrl = this;

    var authData = {};

    ctrl.showLoginForm = true;
    ctrl.showLoginProgressIndicator = false;

    var hideLoginProgressIndicator = function() {
        ctrl.showLoginProgressIndicator = false;
    }

    var showLoginProgressIndicator = function() {
        ctrl.showLoginProgressIndicator = true;
    }

    var hideLoginForm = function() {
        ctrl.showLoginForm = false;
    }

    var showLoginForm = function() {
        ctrl.showLoginForm = true;
    }

	ctrl.tryLogin = function (loginData) {

        // Hide Login Form
        hideLoginForm();

        // Show login progress Indicator
		showLoginProgressIndicator();

		// Sanitize input
		var email = sanitizeString(loginData.email);
		var password = sanitizeString(loginData.password);

		// Perform HTTP Post

		// Request
		$http({
        	url: 'http://localhost:8080/newsportal/login',
        	method: 'POST',
        	data: {'email' : email,
        		   'password': password
        		  },
        	headers: {'Content-Type': 'application/x-www-form-urlencoded',
        			 }
    	})
    	.then(function(response) {
            if (response.status === 200) {
                // success
                // Set the authentication data
                var data = response.data;
                authData['apiKey'] = data.apiKey;
                authData['fullName'] = data.fullName;
                authData['firstName'] = data.firstName;
                authData['lastName'] = data.lastName;
                authData['email'] = data.email;
                authData['roles'] = data.roles;

                // Share with the service as authService.setLoginData
                authService.setLoginData(authData);

                // Redirect
                $location.path('/home');
            } else {
                console.log('something went wrong');
                console.log(response);
            }

    	}, 
    	function(response) {
            // failed
            console.log("failed");
            console.log(response);
    	});
    };

	var sanitizeString = function(string) {
		return $sanitize(string);
	};
});