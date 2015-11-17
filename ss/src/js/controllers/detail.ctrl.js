ctrls.controller('detailCtrl', [
    '$scope',
    '$stateParams',
    '$rootScope',
    'productsService',
    'detailService',
    function($scope, $stateParams, $rootScope, productsService, detailService) {
        $scope.wrapClass = 'page-detail';

        //获取商品详情
        $scope.$on('product.get', function() {
            $scope.product = productsService.products.manager[$stateParams.id];
        });
        detailService.getDetail($stateParams.id);
    }
])
