/**
 * Created by Dan on 12/24/15.
 */

define(function(require, exports, module) {
    var yahooService = function ($http) {
        return {
            "leagueInfo": function() {
                return $http.get("http://127.0.0.1:7070/api/yahoo/leagueInfo");
            }
        }
    };

    module.exports = ['$http', yahooService];
});
