(function() {
  'use strict';
    angular
      .module('champInfo')
      .controller('mainController', function($scope, champService){
        var vm = this;
        champService.getThumbs().then(function(champs){
          vm.champs = champs[0];
          vm.champTags = champs[1];

          // bind the default state for the filter.
          $scope.champTags = {
            tag: vm.champTags[0]
          };
        });

        // filter based on drop down of types.

        $scope.MyFilter = function(champs){
          if(_.contains(champs.tags, $scope.champTags.tag.tag)){
            return true;
          }else if($scope.champTags.tag.id == 1){
            return true;
          }else{
            return false;
          }
        };




      });



}());
