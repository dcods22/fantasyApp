define(function (require, exports, module) {

    'use strict';

    var sentMessage = function(){
        return {
            restrict: 'AE',
            controller: function($scope, $filter) {

                $scope.filteredTime = $filter('date')(new Date($scope.time), 'medium');

            },
            scope: {
                from: '=',
                message: '=',
                time: '='
            },
            templateUrl: '/app/views/directives/sent.directive.html'
        };
    };

    module.exports = [sentMessage];

});
