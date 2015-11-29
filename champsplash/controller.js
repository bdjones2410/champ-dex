(function() {
  'use strict';
    angular
    .module('champSplash')
    .controller('champController', function($scope, splashService, $routeParams, $sce){
      $scope.skinnum = 0;
      $scope.changenum=function(num){
        $scope.skinnum = num;
      };
      $scope.champDescipt= "";


      $scope.newSpell = function(descript, name){
        $scope.spelldescript = descript;
      };



      if($routeParams.champID){
        console.log($routeParams.champID);
        var thisid = $routeParams.champID;
        splashService.getChampSplash($routeParams.champID).success(function(champs){
          _.each(champs.data, function(el){
            $scope.champs = el;
          });
          $scope.spelldescript = $scope.champs.spells[0].description;
          var lore = champs.lore;
          $scope.champlore = $sce.trustAsHtml(lore);
        });
      }
    });





}());
