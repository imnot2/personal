ctrls.controller('detailCtrl', [
    '$scope',
    '$stateParams',
    '$rootScope',
    'productsService',
    'detail',
    function($scope, $stateParams, $rootScope, productsService, detail) {
        $scope.wrapClass = 'page-detail';

        //获取商品详情
        $scope.$on('product.get', function() {
            $scope.product = productsService.products.manager[$stateParams.id];
        });
        detail.getDetail($stateParams.id);
    }
])
