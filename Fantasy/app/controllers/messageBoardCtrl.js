/**
 * Created by Dan on 12/11/15.
 */
define(function (require, exports, module) {

    'use strict';

    var messageBoardCtrl = function($scope, modalService) {

        var vm = this;

        vm.user = "Dan";

        vm.isFrom = function(from) {
            return vm.user == from;
        };

        vm.messages = [
            {
                from: "Dan",
                message: "test message",
                time: "Fri Dec 11 2015 13:01:03 GMT-0500"
            },
            {
                from: "Bishop",
                message: "from test message",
                time: "Fri Dec 11 2015 23:01:03 GMT-0500"
            },
            {
                from: "Bishop",
                message: "from test message",
                time: "Fri Dec 11 2015 19:01:03 GMT-0500"
            },
            {
                from: "Dan",
                message: "from test message",
                time: "Fri Dec 11 2015 21:01:03 GMT-0500"
            },
            {
                from: "Bishop",
                message: "from test message",
                time: "Fri Dec 11 2015 18:01:03 GMT-0500"
            }
        ];

        //adds a new message
        vm.postNewMessage = function() {
            if( vm.newMessage ) {
                if ( vm.newMessage.length > 0 ) {
                    vm.messages.push({
                        from: vm.user,
                        message: vm.newMessage,
                        time: new Date()
                    });

                    vm.newMessage = "";
                }
            } else {
                modalService.errorModal("Your new message is blank!");
            }
        };

    };

    module.exports = ['$scope', 'modalService', messageBoardCtrl];

});
