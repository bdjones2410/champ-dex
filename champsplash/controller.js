(function() {
  'use strict';
    angular
    .module('champSplash')
    .controller('champController', function($scope, splashService, $routeParams, $sce){
      var vm = this;
      vm.skinnum = 0;
      vm.changenum=function(num){
        vm.skinnum = num;
      };
      vm.champDescipt= "";


      vm.newSpell = function(descript, name){
        vm.spelldescript = descript;
      };



      if($routeParams.champID){
        var thisid = $routeParams.champID;
        splashService.getChampSplash($routeParams.champID).then(function(champs){
            vm.champs = champs[0];
            vm.champslore = champs[0].lore;

        });
      }
    });





}());
