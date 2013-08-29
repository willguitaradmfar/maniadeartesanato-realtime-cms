'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/articles', {templateUrl: 'partials/articles.html', controller: 'ArticlesControle'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/fotos', {templateUrl: 'partials/fotos.html', controller: 'FotosControle'});
    $routeProvider.otherwise({redirectTo: '/articles'});
 }]);


 