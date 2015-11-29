(function() {
  'use strict';

      angular
        .module('champSplash')
        .factory('splashService', function($http, _){
          var url = 'http://ddragon.leagueoflegends.com/cdn/5.23.1/data/en_US/champion/';

          var getChampSplash = function(champID){
            return $http.get(url+champID+'.json');
          };

          return {
            getChampSplash : getChampSplash,
          };

        });



}());
