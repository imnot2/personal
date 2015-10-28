ctrls.controller('userBuyer', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function ($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.wrapClass = 'page-home page-buyer';            
        $scope.page = parseInt($stateParams.page);
        $scope.showorderTips = true;
    }
])
