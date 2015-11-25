ctrls.controller('paydepositCtrl', [
    '$scope',
    '$stateParams',
    'addressService',
    'productsService',
    'detailService',
    function($scope, $stateParams, addressService, productsService, detailService) {
        $scope.wrapClass = 'page-home paydeposit';
        $scope.containerClass = $stateParams.type;
        $scope.addresses = addressService.addresses;
        $scope.hasAddress = !$scope.addresses.length;
        $scope.showAdd = $stateParams.type === 'AddressManger';
        $scope.showSave = $stateParams.type === 'AddAddress';
        //$scope.newAddress = {};
        //获取默认地址
        for (var i = 0; i < $scope.addresses.length; i++) {
            if ($scope.addresses[i].isDefault) $scope.defaultAddress = $scope.addresses[i];
        }

        //获取商品详情
        $scope.$on('product.get', function() {
            $scope.product = productsService.products.manager[$stateParams.id];
        });
        detailService.getDetail($stateParams.id);

        //保存地址
        $scope.save = function() {
            addressService.saveAddress();
        }
    }
])
