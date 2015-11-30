(function() {
  'use strict';

  angular
    .module('champInfo')
    .factory('champService', function($http, _){
      var url ='http://ddragon.leagueoflegends.com/cdn/5.22.1/data/en_US/champion.json';

      var getThumbs = function(){
        return $http.get(url).then(function(data){
          var arr = [];
          _.each(data.data.data, function(el){
            arr.push(el);
          });
          return arr;
        });
      };



      return {
        getThumbs : getThumbs
      };

    });

}());
