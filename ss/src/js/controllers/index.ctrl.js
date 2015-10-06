ctrls.controller('indexCtrl', [
    '$scope',
    '$http',
    '$state',
    '$stateParams',
    '$rootScope',
    'user',
    function ($scope, $http, $state, $stateParams, $rootScope) {
        $rootScope.menuShow = false;        
        $scope.type = parseInt($stateParams.type);
        $scope.wrapClass = 'page-home';
        $scope.products = [{
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件222',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }, {
            'name': '石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件333',
            'price': '150',
            'url': '/images/temp/1.jpg'
        }]
        $scope.dynamicCount = 9;
        $scope.toggleMenuShow = function () {
            $rootScope.menuShow = !$rootScope.menuShow;
        }
        $scope.toUser = function(){
            //var token = user.getToken();
            var token = 'asdfa23gdf44dfa7';
            //var shenfen = user.getShenfen();
            var shenfen = 'Buyer';
            if(!token){
                $state.go('login')
            }else{
                $state.go('user'+shenfen,{page:1})
            }
        }
    }
])