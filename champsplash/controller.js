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
        splashService.getChampSplash($routeParams.champID).then(function(champs){
            $scope.champs = champs[0];
            $scope.champslore = champs[0].lore;

        });
      }
    });





}());
