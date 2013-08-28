'use strict';


/* Controllers */

angular.module('myApp.controllers', []).
  controller('ArticlesControle', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
  	console.log('ArticlesControle');

  	 //PLUGINS JQUERY
	
	$scope.jqte = $('#modal-container-230951 .jqte-test').jqte();

	$scope.jval = $('#modal-container-230951 .jqte_editor');

  	$scope.title = 'Artigos';

  	$scope.msg = {};
  	

  	

    $scope.refresh = function(artigo) {
    	$http({method: 'GET', url: '/articles', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.artigos = data;                
            }).
            error(function(data, status, headers, config) {
                
            });	
    };

    $scope.editar = function(artigo) {
    	console.log(artigo._id);
    	$scope.newArtigo = artigo;  	
    	$scope.jqte.jqteVal(artigo.content);
    };

    $scope.novo = function() {      
      $scope.newArtigo = {};
      $scope.jqte.jqteVal('');
    };

    $scope.salvar = function(artigo) {
    if(artigo && artigo._id){
      	$scope.newArtigo = artigo;    	
      	$scope.newArtigo.content = $scope.jval.html();

      	$http({method: 'PUT', url: '/articles/'+artigo._id, data : $scope.newArtigo, cache: $templateCache}).
              success(function(data, status, headers, config) {            	
                  $scope.msg.type = 'alert alert-success';
        			  	$scope.msg.title = 'Sucesso';
        			  	$scope.msg.content = 'Artigo ('+$scope.newArtigo.title+') Atualizado com sucesso';      			  	      			  	
              }).
              error(function(data, status, headers, config) {
                  $scope.msg.type = 'alert alert-error';
        			  	$scope.msg.title = 'Erro';
        			  	$scope.msg.content = 'Artigo '+$scope.newArtigo.title+' com erro ('+data+')';
              });
      }else{        
        $scope.newArtigo.content = $scope.jval.html();                
        $scope.newArtigo.slug = 'teste';
        $scope.newArtigo.state = 'Publish';        
        $scope.newArtigo.views = 0;
        $scope.newArtigo.comments = [];


        $http({method: 'POST', url: '/articles/', data : $scope.newArtigo, cache: $templateCache}).
              success(function(data, status, headers, config) { 
                  $scope.newArtigo._id = data.id;
                  $scope.msg.type = 'alert alert-success';
                  $scope.msg.title = 'Sucesso';
                  $scope.msg.content = 'Artigo ('+$scope.newArtigo.title+') Salvo com sucesso';                                
                  $scope.artigos.push($scope.newArtigo);                   
              }).
              error(function(data, status, headers, config) {
                  $scope.msg.type = 'alert alert-error';
                  $scope.msg.title = 'Erro';
                  $scope.msg.content = 'Artigo '+$scope.newArtigo.title+' com erro ('+data+')';
              });
      }
    };

    $scope.excluir = function(artigo) {
    	console.log(artigo._id);
    	$scope.newArtigo = artigo;    	
    	
    	$http({method: 'DELETE', url: '/articles/'+artigo._id, data : $scope.newArtigo, cache: $templateCache}).
            success(function(data, status, headers, config) {            	
                $scope.msg.type = 'alert alert-success';
      			  	$scope.msg.title = 'Sucesso';
      			  	$scope.msg.content = 'Artigo ('+$scope.newArtigo.title+') excluído com sucesso';
      			    
                artigo.isExcluir = 'none';
                artigo.isEditar = 'none';
                artigo.classNameRow = 'error';


            }).
            error(function(data, status, headers, config) {
                $scope.msg.type = 'alert alert-error';
      			  	$scope.msg.title = 'Erro';
      			  	$scope.msg.content = 'Artigo '+$scope.newArtigo.title+' com erro ('+data+')';
            });
    };

    $scope.refresh();

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
  	console.log('MyCtrl2');	
  }])
  
  .controller('MenuControle', ['$scope', function($scope) {
  	console.log('MenuControle');
 	

	$scope.atMenu = function($t) {		
		if($t == 'post'){
			$scope.classMenuPost = 'active';
			$scope.classMenuUser = '';
			$scope.title = 'Postagens';
		}else if($t == 'users'){
			$scope.classMenuUser = 'active';
			$scope.classMenuPost = '';
			$scope.title = 'Usuários';
		}
	};

  }]);

