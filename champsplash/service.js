(function() {
  'use strict';

      angular
        .module('champSplash')
        .factory('splashService', function($http, _){

          var getVersion = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/realm?api_key=aa6fb45a-b8cb-40ba-838b-83453f2e206c";
          var baseUrl = 'http://ddragon.leagueoflegends.com/cdn/';
          var tailUrl ='/data/en_US/champion/';
          var imgTail = "/img/champion/";
          var version = "";
          var champId = "";
          var splashUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
          var skinUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
          var spellsUrl = '/img/spell/';

          var getChampSplash = function(champID){
            baseUrl ='http://ddragon.leagueoflegends.com/cdn/';
            champId = champID;
            return $http.get(getVersion).then(function(data){
              baseUrl = baseUrl+data.data.css;
              return $http.get(baseUrl+tailUrl+champId+'.json');
              }).then(function(data){
                var arr = [];
                _.each(data.data.data, function(el){
                  el.image.splashbase = splashUrl + el.id;
                  el.image.skinsbase = skinUrl + el.id;
                  _.each(el.spells, function(curVal){
                    curVal.id = baseUrl+spellsUrl+curVal.id;
                  });
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
