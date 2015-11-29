(function() {
  'use strict';

    angular
      .module('champInfo', [
        'ngRoute',
        'underscore',
        'champSplash',
        'champFaves'

      ])
      .config(function($routeProvider){
          $routeProvider
            .when('/',{
              templateUrl: 'views/thumbs.html',
              controller: 'mainController'
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
