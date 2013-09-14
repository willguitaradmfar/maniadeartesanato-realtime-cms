
'use strict';

angular.module('myApp.resource', ["ngResource"])
.factory('UserREST', function ($resource) {
      return $resource('articles', {}, {
        list: {method:'GET', isArray:true}
      });
  })
.factory('FotoREST', function ($resource) {
      return $resource('foto:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        delete: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
  ;