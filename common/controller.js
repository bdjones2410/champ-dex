(function() {
  'use strict';
    angular
      .module('champInfo')
      .controller('mainController', function($scope, champService){
        champService.getThumbs().then(function(champs){
          $scope.champs = champs;
        });

      });



}());
