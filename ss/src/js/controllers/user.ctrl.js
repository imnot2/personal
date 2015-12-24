ctrls.controller('userCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.wrapClass = 'page-home page-buyer';
        $scope.page = parseInt($stateParams.page);
        $scope.showorderTips = true;
        $scope.userInfo = user.getUserInfo();
    }
]).controller('userBuyerCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'orderService',
    function($scope, $state, $stateParams, orderService) {
        $scope.wrapClass = 'page-home page-buyer';
        $scope.page = parseInt($stateParams.page);
        $scope.showorderTips = true;

        //进行中
        $scope.$on('myorder.viewlist.update', function() {
            $scope.myorder = orderService.orders.myorder.showData;
            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                $scope.$digest();
            }
        });


        // orderService.getOrders('myorder');
        // $scope.$on('myorder.update', function() {
        //     $scope.myorder = orderService.myorder;
        //     if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        //         $scope.$digest();
        //     }
        // });

        // orderService.getOrders('auctionorder');
        // $scope.$on('auctionorder.update', function() {
        //     $scope.auctionorder = orderService.auctionorder;
        //     if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
        //         $scope.$digest();
        //     }
        // });
    }
]).controller('userSellerCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.wrapClass = 'page-home page-seller';
        $scope.page = parseInt($stateParams.page);
    }
]).controller('registerCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.wrapClass = "rigister";
        $scope.toParent = function(obj) {
            $scope[obj.displayName] = obj;
        }
        $scope.getParent = function(name) {
            return $scope[name];
        }
    }
]).controller('forgetpasswordCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.wrapClass = 'forgetpassword';
    }
]).controller('settingCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {}
])
