'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'myApp.resource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/articles', {templateUrl: 'admin/partials/articles', controller: 'ArticlesControle'});
    $routeProvider.when('/view2', {templateUrl: 'admin/partials/partial2', controller: 'MyCtrl2'});
    $routeProvider.when('/fotos', {templateUrl: 'admin/partials/fotos', controller: 'FotosControle'});
    $routeProvider.otherwise({redirectTo: '/articles'});
 }]);


 