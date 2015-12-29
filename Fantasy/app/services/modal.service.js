/**
 * Created by Dan on 12/11/15.
 */

define(function(require, exports, module) {
    var modalService = function ($uibModal, $rootScope) {
        return {
            "errorModal": function(error) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/views/modals/error.modal.html',
                    controller: function($scope, $uibModalInstance) {

                        $scope.close = function () {
                            $uibModalInstance.dismiss('cancel');
                        };

                        $scope.error = error;

                    },
                    scope: $rootScope.$new()
                });
            }
        }
    };

    module.exports = ['$uibModal', '$rootScope', modalService];
});
