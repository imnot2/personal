ctrls.controller('indexCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'productsService',
    'user',
    function($scope, $http, $state, $stateParams, $rootScope, productsService, user) {
        console.log("BB");

        $scope.slideMenuShow = false;
        $scope.showLogin = false;
        $scope.loginSlideIn = true; //下拉登录框接下来是否为下拉显示(true)、上拉隐藏(false
        $scope.wrapClass = 'page-home';

        $scope.type = parseInt($stateParams.type);
        $scope.products = productsService.products;

        //进行中
        productsService.getProducts('processing', function(err) {
            console.log(err);
        });

        //即将开始
        productsService.getProducts('willBegin', function(err) {
            console.log(err);
        });
        $scope.$on('showData.update', function() {
            $scope.products = productsService.products;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });
        //关注中
        if ($scope.type == 3) {
            if (!user.getToken()) {
                $scope.noLogin = true;
            } else {
                productsService.getProducts('interest', function(err) {
                    console.log(err);
                });
            }
        };

        $scope.dynamicCount = 9;

        var token = user.getToken();
        var identity = user.getIdentity();
        var noLogin = !token;

        $scope.toUser = function() {
            if (noLogin) {
                $state.go('login')
            } else {
                $state.go('user' + identity, {
                    page: 1
                })
            }
        }


        console.log("BBed");
    }
])
