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
        if(token){
            $scope.userInfo = user.getUserInfo();
            $scope.isLogin = true;
        }else{
            $scope.isLogin = false;
        } 
        $scope.wrapClass = 'page-home';

        $scope.type = parseInt($stateParams.type);

        //进行中
        productsService.getProducts('processing');

        //即将开始
        productsService.getProducts('willBegin');

        $scope.$on('showData.update', function() {
            $scope.products = productsService.products;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });
        //关注中
        if ($scope.type == 3 && token) {
            productsService.getProducts('interest');
        };

        $scope.dynamicCount = 9;
    }
])
