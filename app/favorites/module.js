(function() {
  'use strict';

    angular
      .module('champFaves', [
        'ngRoute',


      ])
      .config(function($routeProvider){
          $routeProvider

            .when('/favoriteChampions',{
              templateUrl:'views/favorites.html',
              controller:'favoritesController'
            });
          });


}());
