define(function (require, exports, module) {

    'use strict';

    var tradeHolder = function(){
        return {
            restrict: 'AE',
            controller: function($scope) {
                $scope.voted = function(vote, id) {
                    switch(vote.toLowerCase()) {
                        case "yes":
                            $scope.trades[id].votedYes = true;
                            $scope.trades[id].votedNo = false;
                            break;
                        case "no":
                            $scope.trades[id].votedYes = false;
                            $scope.trades[id].votedNo = true;
                            break;
                        default:
                            break;
                    }
                };
            },
            scope: {
                trades: '='
            },
            templateUrl: '/app/views/directives/trades.directive.html'
        };
    };

    module.exports = [tradeHolder];

});
