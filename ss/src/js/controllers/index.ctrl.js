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

        $scope.$watch('type', function(newVal, oldVal) {
            switch (newVal) {
                case 1:
                    productsService.getProducts({
                        type: 'processing',
                        isFirst: true
                    });
                    break;
                case 2:
                    productsService.getProducts({
                        type: 'willBegin',
                        isFirst: true
                    });
                    break;
                case 3:
                    if (token) {
                        productsService.getProducts({
                            type: 'interest',
                            isFirst: true
                        });
                    }
                    break;
            }
        });

        $scope.$on('showData.update', function() {
            $scope.products = productsService.products;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });


        $scope.dynamicCount = 9;
    }
])
