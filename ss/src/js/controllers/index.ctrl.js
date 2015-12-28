ctrls.controller('indexCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'productsService',
    'user',
    function($scope, $http, $state, $stateParams, $rootScope, productsService, user) {
        var token = user.getToken();
        if (token) {
            $scope.userInfo = user.getUserInfo();
            $scope.isLogin = true;
        } else {
            $scope.isLogin = false;
        }
        $scope.wrapClass = 'page-home';

        $scope.type = parseInt($stateParams.type);

        //关注中
        if ($scope.type == 3 && token) {
            productsService.getProducts({
                type: 'interest',
                isFirst: true
            });
        };

        //进行中
        if ($scope.type == 1) {
            productsService.getProducts({
                type: 'processing',
                isFirst: true
            });
        };

        //即将开始
        if ($scope.type == 2) {
            productsService.getProducts({
                type: 'willBegin',
                isFirst: true
            });
        };

        $scope.$on('showData.update', function() {
            $scope.products = productsService.products;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });


        $scope.dynamicCount = 9;
    }
])
