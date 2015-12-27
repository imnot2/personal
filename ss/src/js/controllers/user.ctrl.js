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
        if (!user.getToken()) {
            $state.go('login', {
                'cur': $state.current.name,
                'params': JSON.stringify($state.params)
            });
        }
    }
]).controller('userBuyerCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'orderService',
    function($scope, $state, $stateParams, orderService) {

        orderService.getOrders({
            type: 'myorder',
            isFirst: true,
            successFn: function() {
                $scope.myorder = orderService.orders.myorder.srcData;
                if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                    $scope.$digest();
                }
            }
        });

        orderService.getOrders({
            type: 'auctionorder',
            isFirst: true,
            successFn: function() {
                $scope.auctionorder = orderService.orders.auctionorder.srcData;
                if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                    $scope.$digest();
                }
            }
        });
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
        $scope.isSelling = true;
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
