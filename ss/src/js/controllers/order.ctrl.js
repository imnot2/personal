ctrls.controller('orderSellerCtrl', [
    '$scope',
    '$stateParams',
    '$rootScope',
    function($scope, $stateParams, $rootScope) {
        $scope.wrapClass = 'page-orderdetail';
    }
]).controller('orderBuyerCtrl', [
    '$scope',
    '$stateParams',
    '$rootScope',
    function($scope, $stateParams, $rootScope) {
        $scope.wrapClass = 'page-orderdetail';
    }
])
