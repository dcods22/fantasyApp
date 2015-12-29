/**
 * Created by Dan on 12/11/15.
 */
define(function (require, exports, module) {

    'use strict';

    var receivedMessage = function(){
        return {
            restrict: 'AE',
            controller: function($scope, $filter) {

                $scope.filteredTime = $filter('date')(new Date($scope.time), 'medium');

            },
            link: function($scope) {

            },
            scope: {
                from: '=',
                message: '=',
                time: '='
            },
            templateUrl: '/app/views/directives/receive.directive.html'
        };
    };

    module.exports = [receivedMessage];

});
