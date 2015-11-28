ctrls.controller('paydepositCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    'addressService',
    'productsService',
    'detailService',
    function($scope, $stateParams, $state, addressService, productsService, detailService) {
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

        $scope.newAddress = productsService.newAddress;
        // $scope.$on('editAddress.update', function() {
        //     $scope.newAddress = productsService.editAddress;
        //     if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        //         $scope.$digest();
        //     }
        // });


        $scope.newAddress = addressService.newAddress;
        $scope.addAddress = function() {
            for (var p in addressService.newAddress) {
                addressService.newAddress[p] = '';
            }
            $state.go('paydeposit', {
                type: 'AddAddress'
            });
        }
        $scope.saveAddress = function(address) {
            addressService.saveAddress(address);
        }
        $scope.deleteAddress = function(address) {
            addressService.deleteAddress(address.id);
        }
        $scope.editAddress = function(address) {
            var address = address || {};
            for (var p in address) {
                addressService.newAddress[p] = address[p]
            }
            $state.go('paydeposit', {
                type: 'AddAddress'
            });
        }
    }
])
