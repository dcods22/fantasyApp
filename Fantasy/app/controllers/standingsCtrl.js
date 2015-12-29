define(function (require, exports, module) {

    'use strict';

    var standingsCtrl = function($scope) {
        var vm = this;

        vm.standings = {
            divisons: [
                {
                    name: "Division 1",
                    teams: [
                        {
                            name: "team 1",
                            wins: 9,
                            loses: 2
                        }, {
                            name: "team 2",
                            wins: 7,
                            loses: 4
                        }, {
                            name: "team 3",
                            wins: 3,
                            loses: 8
                        }
                    ]
                },
                {
                    name: "Division 2",
                    teams: [
                        {
                            name: "team 4",
                            wins: 6,
                            loses: 5
                        }, {
                            name: "team 5",
                            wins: 4,
                            loses: 7
                        }, {
                            name: "team 6",
                            wins: 2,
                            loses: 9
                        }
                    ]
                }
            ]
        };
    };

    module.exports = ['$scope', standingsCtrl];

});