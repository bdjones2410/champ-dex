(function() {
  'use strict';
    angular
      .module('champInfo')
      .controller('mainController', function($scope, champService){
        var vm = this;
        champService.getThumbs().then(function(champs){
          vm.champs = champs;

        });

      });



}());
