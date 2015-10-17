ctrls.controller('login', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    'utils',
    function($scope, $http, $state, $stateParams, $rootScope, user, utils) {
        $scope.submit = function(loginInfo) {
            user.login(loginInfo, function(res) {
                $rootScope.dialog = {
                    show: true,
                    content: res.msg
                }
                if(res.status === 0){
                    
                }
            });
        }
    }
])
