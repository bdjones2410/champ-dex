(function() {
  'use strict';

    angular
      .module('comingSoon', [
        'ngRoute',


      ])
      .config(function($routeProvider){
          $routeProvider

            .when('/comingSoon',{
              templateUrl:'views/comingSoon.html',
              controller:'comingSoonController'
            });
          });


}());
