(function() {
  'use strict';
    angular
      .module('champInfo')
      .controller('mainController', function($scope, champService){
        champService.getThumbs().success(function(champs){
          $scope.champs = champs.data;
        });

      });



}());
