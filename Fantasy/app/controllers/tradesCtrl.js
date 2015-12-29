/**
 * Created by Dan on 12/11/15.
 */

define(function (require, exports, module) {

    'use strict';

    var tradesCtrl = function($scope){

        var vm = this;

        vm.trades = [];

        vm.trades[0] =
        {
            id: 0,
            name: "trade 1",
            to: "Bishop",
            from: "Dan",
            details: "trade for tom brady",
            votedYes: false,
            votedNo: true
        };
        vm.trades[1] =
        {
            id: 1,
            name: "trade 2",
            to: "Bishop",
            from: "Dan",
            details: "trade for tom brady",
            votedYes: true,
            votedNo: false
        };

        vm.trades[2] =
        {
            id: 2,
            name: "trade 3",
            to: "Bishop",
            from: "Dan",
            details: "trade for tom brady",
            votedYes: false,
            votedNo: false
        };

    };

    module.exports = ['$scope', tradesCtrl];

});