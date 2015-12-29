/**
 * Created by Dan on 12/13/15.
 */
define(function (require, exports, module) {

    'use strict';

    var leagueCtrl = function($scope, yahooService) {
        var vm = this;

        vm.getLeagueInfo = function() {
            yahooService.leagueInfo().then(
                function successCallback(response) {
                    vm.leagueInfo = response.data;
                }, function errorCallback(response) {
                    console.log(response);
                }
            );
        };

        vm.getLeagueInfo();

    };

    module.exports = ['$scope', 'yahooService', leagueCtrl];

});