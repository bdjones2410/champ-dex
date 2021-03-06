(function() {
  'use strict';

    angular
      .module('champInfo', [
        'ngRoute',
        'ngSanitize',
        'underscore',
        'champSplash',
        'champFaves',

      ])
      .config(function($routeProvider){
          $routeProvider
            .when('/',{
              templateUrl: 'views/thumbs.html',
              controller: 'mainController as mainCtrl'
            })
            .when('/404',{
              templateUrl:'views/404.html',
            })
            .otherwise({ redirectTo:'/404'
            });

        });

      angular
        .module('underscore',[])
        .factory('_', function($window){
          return $window._;
        });



}());
