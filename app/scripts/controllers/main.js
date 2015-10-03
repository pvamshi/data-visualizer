'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
    .controller('MainCtrl', ['util',
        function(util) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                util.s()
            ];
        }
    ]);
