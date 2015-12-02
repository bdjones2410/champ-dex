(function() {
  'use strict';

    angular
      .module('champInfo')
      .directive('champHeader', function(){
        return{
          restrict: 'E',
          templateUrl: '../views/directive.header.html',
          scope:{

          },
        };
      })
        .directive('champFooter', function(){
          return{
            restrict:'E',
            templateUrl: '../views/directive.footer.html',
            scope:{

            },
          };
        });





}());
