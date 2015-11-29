(function() {
  'use strict';

    angular
      .module('champSplash', [
        'ngRoute',
      ])
      .config(function($routeProvider){
          $routeProvider

            .when('/champDetails/:champID',{
              templateUrl:'views/splash.html',
              controller:'champController'
            });


        });




}());
