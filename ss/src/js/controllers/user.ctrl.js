ctrls.controller('userCtrl', [
    '$scope',
    '$stateParams',
    'loginRedirect',
    function($scope, $stateParams, loginRedirect) {
        $scope.wrapClass = 'page-home page-buyer';
        $scope.page = parseInt($stateParams.page);
        $scope.showorderTips = true;
    }
]).controller('userBuyerCtrl', [
    '$scope',
    'orderService',
    function($scope, orderService) {
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
    function($scope, $http) {
        $scope.isSelling = true;
        $scope.formData = {};
        $scope.savesetting = function() {
            var data = {
                name: $scope.storeName,
                info: $scope.storeInfo,
                address: $scope.storeAddress,
                imgs: $scope.formData
            }

            console.log(data);
        }
    }
]).controller('registerCtrl', [
    '$scope',
    function($scope) {
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
    function($scope) {
        $scope.wrapClass = 'forgetpassword';
    }
]).controller('settingCtrl', [
    '$scope',
    function($scope) {
        $scope.wrapClass = 'page-setting';
    }
]).controller('contributeCtrl', [
    '$scope',
    function($scope) {
        $scope.wrapClass = 'page-contribute';
    }
]).controller('collectCtrl', [
    '$scope',
    function($scope) {
        $scope.wrapClass = 'page-collect';
    }
]).controller('contactCtrl', [
    '$scope',
    function($scope) {
        $scope.wrapClass = 'page-contact';
    }
])
