ctrls.controller('paydepositCtrl', [
    '$scope',
    'addressService',
    function($scope, addressService) {
        $scope.wrapClass = 'page-home paydeposit';
        $scope.addresses = addressService.addresses;
        $scope.hasAddress = !addressService.addresses.length;
    }
])
