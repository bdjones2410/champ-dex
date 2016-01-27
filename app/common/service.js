(function() {
  'use strict';

  angular
    .module('champInfo')
    .factory('champService', function($http, _){
      var getVersion = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/realm?api_key=aa6fb45a-b8cb-40ba-838b-83453f2e206c";
      var baseUrl ='http://ddragon.leagueoflegends.com/cdn/';
      var tailUrl ="/data/en_US/champion.json";
      var imgTail = "/img/champion/";
      var version = "";


      var getThumbs = function(){
        return $http.get(getVersion).then(function(data){
          baseUrl = 'http://ddragon.leagueoflegends.com/cdn/'+data.data.css;
          return $http.get(baseUrl+tailUrl);

        }).then(function(data){
          var arr = [];
          _.each(data.data.data, function(el){
            el.image.full = baseUrl + imgTail + el.image.full;
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
