/**
 * Created by Dan on 12/11/15.
 */
define( function(require, exports, module) {
    function httpConfig($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

    module.exports = httpConfig;
});