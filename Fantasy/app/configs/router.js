/**
 * Created by Dan on 12/11/15.
 */
define( function(require, exports, module) {
    function appConfig($stateProvider, $urlRouterProvider) {

        var viewBase = "/app/views/";

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: viewBase + 'home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('messageBoard', {
                url: '/messageBoard',
                templateUrl: viewBase + 'messageBoard.html',
                controller: 'messageBoardCtrl',
                controllerAs: 'vm'
            })
            .state('trades', {
                url: '/trades',
                templateUrl: viewBase + 'trades.html',
                controller: 'tradesCtrl',
                controllerAs: 'vm'
            })
            .state('standings', {
                url: '/standings',
                templateUrl: viewBase + 'standings.html',
                controller: 'standingsCtrl',
                controllerAs: 'vm'
            })
            .state('league', {
                url: '/league',
                templateUrl: viewBase + 'league.html',
                controller: 'leagueCtrl',
                controllerAs: 'vm'
            })
            .state('players', {
                url: '/players',
                templateUrl: viewBase + 'players.html',
                controller: 'playersCtrl',
                controllerAs: 'vm'
            })
    }

    module.exports = appConfig;
});