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
            $scope.noDescription = $scope.product.description.length < 1 && !$scope.product.srcs.length
            $scope.noComment = !$scope.product.comments.length;
        });
        detailService.getDetail($stateParams.id);
    }
])
