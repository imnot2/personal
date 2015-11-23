ctrls.controller('paydepositCtrl', [
    '$scope',
    '$stateParams',
    'addressService',
    'productsService',
    'detailService',
    function($scope, $stateParams, addressService, productsService, detailService) {
        $scope.wrapClass = 'page-home paydeposit';
        $scope.addresses = addressService.addresses;
        $scope.hasAddress = !$scope.addresses.length;
        for (var i = 0; i < $scope.addresses.length; i++) {
            if ($scope.addresses[i].isDefault) $scope.defaultAddress = $scope.addresses[i];
        }

        //获取商品详情
        $scope.$on('product.get', function() {
            $scope.product = productsService.products.manager[$stateParams.id];
        });
        detailService.getDetail($stateParams.id);
    }
])
