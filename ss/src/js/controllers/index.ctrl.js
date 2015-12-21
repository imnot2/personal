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
        
        $scope.products = {};

        //进行中
        $scope.$on('processing.viewlist.update', function() {
            $scope.products.processing = productsService.products.processing;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });

        //即将开始
        $scope.$on('willBegin.viewlist.update', function() {
            $scope.products.willBegin = productsService.products.willBegin;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });

        //关注中
        $scope.$on('interest.viewlist.update', function() {
            $scope.products.interest = productsService.products.interest;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });        

        $scope.dynamicCount = 9;
    }
])
