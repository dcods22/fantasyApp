define(function (require, exports, module) {

    'use strict';

    var standings = function() {
        return {
            restrict: 'AE',
            controller: function($scope) {

            },
            scope: {
                data: '='
            },
            templateUrl: '/app/views/directives/standings.directive.html'
        };
    };

    module.exports = [standings];

});
