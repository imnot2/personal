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
    }
]).controller('userBuyerCtrl', [
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
]).controller('loginCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        console.log($stateParams);
        $scope.submit = function(loginInfo) {
            user.login(loginInfo, function(res) {
                $rootScope.dialog = {
                    show: true,
                    content: res.msg
                }
                if (res.status === 0) {

                }
            });
        }
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
