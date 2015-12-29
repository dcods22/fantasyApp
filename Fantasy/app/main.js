requirejs.config({
    baseUrl: 'js',
    paths: {
        '$': '/app/js/jquery-2.1.4.min',
        'app': 'app',
        'angular': '/app/js/angular-1.4.5/angular',
        'angular-route': '/app/js/angular-1.4.5/angular-route',
        'angular-ui-router': '/app/js/angular-ui-router',
        'bootstrap': '/app/bootstrap/js/bootstrap',
        'browersify': '/app/node_modules/browserify/index',
        'jquery': '/app/js/jquery-2.1.4.min',
        'ui-bootstrap': '/app/js/ui-bootstrap-tpls-0.14.3.min'
    },
    shim: {
        'app': ['angular', 'ui.router', 'ui.bootstrap'],
        '$': {
            'exports': '$'
        },
        'angular' : {
            'exports': 'angular',
            'deps': ['$']
        },
        'angular-route': ['angular'],
        'angular-ui-router': ['angular'],
        'jquery': ['$'],
        'bootstrap': ['$'],
        'ui-bootstrap': ['angular']
    }
});

define( function(require) {
    var angular = require('angular'),
        angularRoute = require('angular-route'),
        angularUIRouter = require('angular-ui-router'),
        bootstrap = require('bootstrap'),
        jquery = require('jquery'),
        uiBootstrap = require('ui-bootstrap')
    ;

    var appName = 'fantasyApp';

    angular.module(appName, ['ui.router', 'ui.bootstrap'])
        .config(require('./configs/router.js'))
        .config(require('./configs/httpConfig.js'))
        .factory('modalService', require('./services/modal.service.js'))
        .factory('yahooService', require('./services/yahoo.service.js'))
        .controller('homeCtrl', require('./controllers/homeCtrl.js'))
        .controller('leagueCtrl', require('./controllers/leagueCtrl.js'))
        .controller('messageBoardCtrl', require('./controllers/messageBoardCtrl.js'))
        .controller('standingsCtrl', require('./controllers/standingsCtrl.js'))
        .controller('tradesCtrl', require('./controllers/tradesCtrl.js'))
        .controller('playersCtrl', require('./controllers/playersCtrl.js'))
        .directive('receivedMessage', require('./directives/receivedMessage.directive.js'))
        .directive('sentMessage', require('./directives/sentMessage.directive.js'))
        .directive('standings', require('./directives/standings.directive.js'))
        .directive('trades', require('./directives/trades.directive.js'))
    ;

    angular.element(document).ready(function() {
        angular.bootstrap(angular.element(document.getElementsByTagName('body')[0]), [appName])
    });
});


