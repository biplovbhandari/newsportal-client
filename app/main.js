'use strict';

// Bootsrtap the app once
angular.element(document).ready(function () {
  console.log('Bootstraping the app');
  angular.bootstrap(document.body, ['mainApp']);
});

// All the dependencies come here
angular.module('mainApp', [ 'ui.router', 'ngMdIcons', 'ngMaterial', 'ngSanitize', 'ngMessages'])
.config(function($httpProvider) {

    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

});