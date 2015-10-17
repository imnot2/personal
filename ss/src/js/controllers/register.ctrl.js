ctrls.controller('register', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {

        $scope.toParent = function(obj) {
            $scope[obj.displayName] = obj;
        }
        $scope.getParent = function(name) {
            return $scope[name];
        }
    }
]).controller('register1', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'utils',
    'codeService',
    function($scope, $http, $state, $stateParams, $rootScope, utils, codeService) {
        console.log($scope);
        $scope.nextStep = function() {
            //$http.post(..)
            codeService.add($scope.user.mobile);
            $state.go('register', {
                page: 2
            })
        }

        // $scope.user = {};
        // $scope.user.displayName = 'user';
        // $scope.toParent($scope.user)
    }
]).controller('register2', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    'codeService',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils, codeService) {
        // console.log($scope);
        // $scope.user = $scope.getParent('user');
        // console.log($scope);
        //codeService.add($scope.user.mobile);
    }
])
