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
          var retArr = [];
          var arr = [];
          var idnum = 0;
          _.each(data.data.data, function(el){
            el.image.full = baseUrl + imgTail + el.image.full;
            arr.push(el);
          });
          arr.sort(function(a,b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
          });
          arr.map(function(a){
            a.name = a.name.toUpperCase();
            return a.name;
          });

          //build a seperate array from each champ for each type of champ tag.
          // and return it with the main data load.
          retArr.push(arr);
          arr = ["All"];
          _.each(retArr[0], function(el){
            _.each(el.tags, function(elm){
              if(!_.contains(arr, elm)){
                arr.push(elm);
              }
            });
          });

          //add an id to each tag in the array

          arr = arr.map(function(el){
            idnum++;
            return {id:idnum, tag:el};
          });
          retArr.push(arr);
          return retArr;
        });
      };



      return {
        getThumbs : getThumbs
      };

    });

}());
