(function() {
  'use strict';

      angular
        .module('champSplash')
        .factory('splashService', function($http, _){
          var url = 'http://ddragon.leagueoflegends.com/cdn/5.23.1/data/en_US/champion/';

          var getChampSplash = function(champID){
            var arr = [];
            return $http.get(url+champID+'.json').then(function(data){
               _.each(data.data.data, function(el){
                arr.push(el);
              });
              return arr;
            });
          };

          return {
            getChampSplash : getChampSplash,
          };

        });



}());
